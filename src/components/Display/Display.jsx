import React, { useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "../../Context";
import { useContext } from "react";
import Mount from "../Mount/Mount";
import "./style.css";
const Display = () => {
  const { searchResult } = useContext(SearchContext);
  const [ownedMounts, setOwnedMounts] = useState([]);
  const [missingMounts, setMissingMounts] = useState([]);
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

  return (
    <div className="mount-wrapper">
      {error ||
        (ownedMounts.length &&
          ownedMounts?.map((mount, i) => {
            return (
              <Mount
                owned={true}
                icon={mount.icon}
                tooltip={mount.tooltip}
                key={i}
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
              />
            );
          }))}
    </div>
  );
};

export default Display;
