import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="character name"
        onChangeName={(e) => props.onSubmit(e.target.value.trim())}
      />
      <select
        name="server"
        id="server"
        onChangeServer={(e) => props.onSubmit(e.target.value)}
      >
        <option value="cerberus">Cerberus</option>
        <option value="louisoix">Louisoix</option>
        <option value="moogle">Moogle</option>
        <option value="omega">Omega</option>
        <option value="phantom">Phantom</option>
        <option value="ragnarok">Ragnarok</option>
        <option value="sagittarius">Sagittarius</option>
        <option value="spriggan">Spriggan</option>
        <option value="alpha">Alpha</option>
        <option value="lich">Lich</option>
        <option value="odin">Odin</option>
        <option value="phoenix">Phoenix</option>
        <option value="raiden">Raiden</option>
        <option value="shiva">Shiva</option>
        <option value="twintania">Twintania</option>
        <option value="zodiark">Zodiark</option>
      </select>
    </div>
  );
};

export default SearchBar;
