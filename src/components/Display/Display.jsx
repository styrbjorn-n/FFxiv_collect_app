import React, { useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "../../Context";
import { useContext } from "react";
import Mount from "../Mount/Mount";
import "./style.css";
import Panel from "../Panel/Panel";
const Display = () => {
  const { searchResult } = useContext(SearchContext);
  const [ownedMounts, setOwnedMounts] = useState([]);
  const [missingMounts, setMissingMounts] = useState([]);
  const [activeMount, setActiveMount] = useState(undefined);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getOwnedMounts = async (id) => {
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
    const getMissingMounts = async (id) => {
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
    }
  }, [searchResult]);

  useEffect(() => {
    const getActiveMount = async (id) => {
      fetch(`https://ffxivcollect.com/api/mounts/${id}`)
        .then((Response) => Response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setError(null);
            setActiveMount(data[0]);
          }
        });
    };
    console.log("effects here we are");
    if (activeMount) {
      getActiveMount();
    }
  }, [activeMount, setActiveMount]);

  return (
    <div className="mount-wrapper">
      {error ||
        (ownedMounts.length &&
          ownedMounts?.map((mount, i) => {
            return (
              <Mount
                mount={mount}
                owned={true}
                id={mount.id}
                icon={mount.icon}
                tooltip={mount.tooltip}
                key={i}
                onClick={setActiveMount}
              />
            );
          }))}
      {error ||
        (missingMounts.length &&
          missingMounts?.map((mount, i) => {
            return (
              <Mount
                owned={false}
                icon={mount.icon}
                tooltip={mount.tooltip}
                key={i}
                onClick={setActiveMount}
              />
            );
          }))}
      {activeMount && (
        <Panel
          name={activeMount.name}
          image={activeMount.image}
          description={activeMount.description}
          owned={activeMount.owned}
          source={activeMount.sources[0].text}
          onClick={setActiveMount}
        />
      )}
    </div>
  );
};

export default Display;
