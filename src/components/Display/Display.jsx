import React, { useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "../../Context";
import { useContext } from "react";
import Mount from "../Mount/Mount";
import "./style.css";
import Panel from "../Panel/Panel";
import { CharacterSelectMenuContext } from "../../Context";
import classNames from "classnames";
const Display = () => {
  const { searchResult, setSearchResult } = useContext(SearchContext);
  const { isActive } = useContext(CharacterSelectMenuContext);

  const [ownedMounts, setOwnedMounts] = useState([]);
  const [missingMounts, setMissingMounts] = useState([]);
  const [mounts, setMounts] = useState([]);
  const [activeMount, setActiveMount] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOwnedMounts = (id) => {
      fetch(`https://ffxivcollect.com/api/characters/${id}/mounts/owned`)
        .then((Response) => Response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setError(null);
            setOwnedMounts(data);
          }
        });
    };
    const getMissingMounts = (id) => {
      fetch(`https://ffxivcollect.com/api/characters/${id}/mounts/missing`)
        .then((Response) => Response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setError(null);
            setMissingMounts(data);
          }
        });
    };
    if (searchResult) {
      getOwnedMounts(searchResult);
      getMissingMounts(searchResult);
      ownedMounts.map((mount) => {
        mount.isOwned = true;
      });
      missingMounts.map((mount) => {
        mount.isOwned = false;
      });
      setMounts(ownedMounts.concat(missingMounts));
    }
  }, [searchResult, activeMount]);

  useEffect(() => {
    const getActiveMount = async (id) => {
      const res = await fetch(`https://ffxivcollect.com/api/mounts/${id}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        setActiveMount(data[0]);
      }
    };
    if (activeMount) {
      getActiveMount(activeMount.id);
    }
  }, []);
  const closePanel = () => {
    setActiveMount(false);
    document.body.style.overflowY = "visible";
  };
  return (
    <>
      <div
        className={
          "mount-wrapper " +
          classNames({
            active: isActive,
            panelOpen: activeMount,
          })
        }
      >
        {error
          ? "choose a character"
          : mounts.length > 0 &&
            mounts.map((mount, i) => {
              return (
                <Mount
                  mount={mount}
                  owned={mount.isOwned}
                  id={mount.id}
                  icon={mount.icon}
                  tooltip={mount.name}
                  key={i}
                  onClick={setActiveMount}
                />
              );
            })}
      </div>
      {activeMount && (
        <Panel
          activeMount={activeMount}
          setActiveMount={closePanel}
          name={activeMount.name}
          image={activeMount.image}
          description={activeMount.description}
          owned={activeMount.owned}
          source={activeMount.sources[0].text}
          onClick={setActiveMount}
        />
      )}
    </>
  );
};

export default Display;
