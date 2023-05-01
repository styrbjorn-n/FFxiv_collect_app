import React from 'react';

function ServerOptions({ dataCenter, setServer }) {
  const handelServerChange = (e) => {
    setServer(e.target.value);
  };

// should be remade as a smarter function most likly using a map function

  switch (dataCenter) {
    case 'Aether':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Adamantoise">Adamantoise</option>
          <option value="Cactuar">Cactuar</option>
          <option value="Faerie">Faerie</option>
          <option value="Gilgamesh">Gilgamesh</option>
          <option value="Jenova">Jenova</option>
          <option value="Midgardsormr">Midgardsormr</option>
          <option value="Sargatanas">Sargatanas</option>
          <option value="Siren">Siren</option>
        </select>
      );
    case 'Chaos':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Cerberus">Cerberus</option>
          <option value="Louisoix">Louisoix</option>
          <option value="Moogle">Moogle</option>
          <option value="Omega">Omega</option>
          <option value="Phantom">Phantom</option>
          <option value="Ragnarok">Ragnarok</option>
          <option value="Sagittarius">Sagittarius</option>
          <option value="Spriggan">Spriggan</option>
        </select>
      );
    case 'Crystal':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Balmung">Balmung</option>
          <option value="Brynhildr">Brynhildr</option>
          <option value="Coeurl">Coeurl</option>
          <option value="Diabolos">Diabolos</option>
          <option value="Goblin">Goblin</option>
          <option value="Malboro">Malboro</option>
          <option value="Mateus">Mateus</option>
          <option value="Zalera">Zalera</option>
        </select>
      );
    case 'Dynamis':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Halicarnassus">Halicarnassus</option>
          <option value="Maduin">Maduin</option>
          <option value="Marilith">Marilith</option>
          <option value="Seraph">Seraph</option>
        </select>
      );
    case 'Elemental':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Aegis">Aegis</option>
          <option value="Atomos">Atomos</option>
          <option value="Carbuncle">Carbuncle</option>
          <option value="Garuda">Garuda</option>
          <option value="Gungnir">Gungnir</option>
          <option value="Kujata">Kujata</option>
          <option value="Tonberry">Tonberry</option>
          <option value="Typhon">Typhon</option>
        </select>
      );
    case 'Gaia':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Alexander">Alexander</option>
          <option value="Bahamut">Bahamut</option>
          <option value="Durandal">Durandal</option>
          <option value="Fenrir">Fenrir</option>
          <option value="Ifrit">Ifrit</option>
          <option value="Ridill">Ridill</option>
          <option value="Tiamat">Tiamat</option>
          <option value="Ultima">Ultima</option>
        </select>
      );
    case 'Korea':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="초코보">초코보</option>
          <option value="모그리">모그리</option>
          <option value="카벙클">카벙클</option>
          <option value="톤베리">톤베리</option>
          <option value="펜리르">펜리르</option>
        </select>
      );
    case 'Light':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="alpha">Alpha</option>
          <option value="lich">Lich</option>
          <option value="odin">Odin</option>
          <option value="phoenix">Phoenix</option>
          <option value="raiden">Raiden</option>
          <option value="Shiva">Shiva</option>
          <option value="twintania">Twintania</option>
          <option value="zodiark">Zodiark</option>
        </select>
      );
    case 'Mana':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Anima">Anima</option>
          <option value="Asura">Asura</option>
          <option value="Chocobo">Chocobo</option>
          <option value="Hades">Hades</option>
          <option value="Ixion">Ixion</option>
          <option value="Masamune">Masamune</option>
          <option value="Pandaemonium">Pandaemonium</option>
          <option value="Titan">Titan</option>
        </select>
      );
    case 'Materia':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Bismarck">Bismarck</option>
          <option value="Ravana">Ravana</option>
          <option value="Sephirot">Sephirot</option>
          <option value="Sophia">Sophia</option>
          <option value="Zurvan">Zurvan</option>
        </select>
      );
    case 'Meteor':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Belias">Belias</option>
          <option value="Mandragora">Mandragora</option>
          <option value="Ramuh">Ramuh</option>
          <option value="Shinryu">Shinryu</option>
          <option value="Unicorn">Unicorn</option>
          <option value="Valefor">Valefor</option>
          <option value="Yojimbo">Yojimbo</option>
          <option value="Zeromus">Zeromus</option>
        </select>
      );
    case 'Primal':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="Behemoth">Behemoth</option>
          <option value="Excalibur">Excalibur</option>
          <option value="Exodus">Exodus</option>
          <option value="Famfrit">Famfrit</option>
          <option value="Hyperion">Hyperion</option>
          <option value="Lamia">Lamia</option>
          <option value="Leviathan">Leviathan</option>
          <option value="Ultros">Ultros</option>
        </select>
      );
    case '猫小胖':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="ZiShuiZhanQiao">ZiShuiZhanQiao</option>
          <option value="YanXia">YanXia</option>
          <option value="JingYuZhuangYuan">JingYuZhuangYuan</option>
          <option value="MoDuNa">MoDuNa</option>
          <option value="HaiMaoChaWu">HaiMaoChaWu</option>
          <option value="RouFengHaiWan">RouFengHaiWan</option>
          <option value="HuPoYuan">HuPoYuan</option>
        </select>
      );
    case '莫古力':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="BaiYinXiang">BaiYinXiang</option>
          <option value="BaiJinHuanXiang">BaiJinHuanXiang</option>
          <option value="ShenQuanHen">ShenQuanHen</option>
          <option value="ChaoFengTing">ChaoFengTing</option>
          <option value="LvRenZhanQiao">LvRenZhanQiao</option>
          <option value="FuXiaoZhiJian">FuXiaoZhiJian</option>
          <option value="Longchaoshendian">Longchaoshendian</option>
          <option value="MengYuBaoJing">MengYuBaoJing</option>
        </select>
      );
    case '豆豆柴':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="ShuiJingTa2">ShuiJingTa2</option>
          <option value="YinLeiHu2">YinLeiHu2</option>
          <option value="TaiYangHaiAn2">TaiYangHaiAn2</option>
          <option value="YiXiuJiaDe2">YiXiuJiaDe2</option>
          <option value="HongChaChuan2">HongChaChuan2</option>
        </select>
      );
    case '陆行鸟':
      return (
        <select id="servers" onChange={handelServerChange}>
          <option value="HongYuHai">HongYuHai</option>
          <option value="ShenYiZhiDi">ShenYiZhiDi</option>
          <option value="LaNuoXiYa">LaNuoXiYa</option>
          <option value="HuanYingQunDao">HuanYingQunDao</option>
          <option value="MengYaChi">MengYaChi</option>
          <option value="YuZhouHeYin">YuZhouHeYin</option>
          <option value="WoXianXiRan">WoXianXiRan</option>
          <option value="ChenXiWangZuo">ChenXiWangZuo</option>
        </select>
      );
  }
}
export default ServerOptions;
