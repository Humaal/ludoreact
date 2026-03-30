import React from 'react'

const Ludo = () => {
  return (
    <div>
        <>
  <h1 className="heading">-:LUDO BOARD:-</h1>
  <div className="game">
    <div className="house green">
      <div className="box">
        <div className="square square-one green" />
        <div className="square square-two green" />
        <div className="square square-three green" />
        <div className="square square-four green" />
      </div>
    </div>
    <div className="house yellow" style={{ right: 0 }}>
      <div className="box">
        <div className="square square-one yellow" />
        <div className="square square-two yellow" />
        <div className="square square-three yellow" />
        <div className="square square-four yellow" />
      </div>
    </div>
    <div className="house red" style={{ bottom: 0 }}>
      <div className="box">
        <div className="square square-one red" />
        <div className="square square-two red" />
        <div className="square square-three red" />
        <div className="square square-four red" />
      </div>
    </div>
    <div className="house blue" style={{ bottom: 0, right: 0 }}>
      <div className="box">
        <div className="square square-one blue" />
        <div className="square square-two blue" />
        <div className="square square-three blue" />
        <div className="square square-four blue" />
      </div>
    </div>
    <div className="home" />
    <div className="cells" style={{ top: "40%" }} />
    <div className="cells g-start" style={{ top: "40%", left: "6.66%" }} />
    <div className="cells" style={{ top: "40%", left: "13.32%" }} />
    <div className="cells" style={{ top: "40%", left: "19.98%" }} />
    <div className="cells" style={{ top: "40%", left: "26.64%" }} />
    <div className="cells" style={{ top: "40%", left: "33.3%" }} />
    <div className="cells" style={{ top: 0, left: "40%" }} />
    <div className="cells" style={{ top: "6.66%", left: "40%" }} />
    <div className="cells safe" style={{ top: "13.32%", left: "40%" }} />
    <div className="cells" style={{ top: "19.98%", left: "40%" }} />
    <div className="cells" style={{ top: "26.64%", left: "40%" }} />
    <div className="cells" style={{ top: "33.3%", left: "40%" }} />
    <div
      className="cells"
      style={{
        top: 0,
        left: "46.66%",
        textAlign: "center",
        fontSize: "x-large",
        color: "white"
      }}
    >
      ↓
    </div>
    <div className="cells yellow" style={{ top: "6.66%", left: "46.66%" }} />
    <div className="cells yellow" style={{ top: "13.32%", left: "46.66%" }} />
    <div className="cells yellow" style={{ top: "19.98%", left: "46.66%" }} />
    <div className="cells yellow" style={{ top: "26.64%", left: "46.66%" }} />
    <div className="cells yellow" style={{ top: "33.3%", left: "46.66%" }} />
    <div className="cells" style={{ top: 0, left: "53.32%" }} />
    <div className="cells y-start" style={{ top: "6.66%", left: "53.32%" }} />
    <div className="cells" style={{ top: "13.32%", left: "53.32%" }} />
    <div className="cells" style={{ top: "19.98%", left: "53.32%" }} />
    <div className="cells" style={{ top: "26.64%", left: "53.32%" }} />
    <div className="cells" style={{ top: "33.3%", left: "53.32%" }} />
    <div className="cells" style={{ top: "40%", right: "33.3%" }} />
    <div className="cells" style={{ top: "40%", right: "26.64%" }} />
    <div className="cells" style={{ top: "40%", right: "19.98%" }} />
    <div className="cells safe" style={{ top: "40%", right: "13.32%" }} />
    <div className="cells" style={{ top: "40%", right: "6.66%" }} />
    <div className="cells" style={{ top: "40%", right: 0 }} />
    <div className="cells blue" style={{ top: "46.66%", right: "33.3%" }} />
    <div className="cells blue" style={{ top: "46.66%", right: "26.64%" }} />
    <div className="cells blue" style={{ top: "46.66%", right: "19.98%" }} />
    <div className="cells blue" style={{ top: "46.66%", right: "13.32%" }} />
    <div className="cells blue" style={{ top: "46.66%", right: "6.66%" }} />
    <div
      className="cells"
      style={{
        top: "46.66%",
        right: 0,
        textAlign: "center",
        fontSize: "x-large",
        color: "white"
      }}
    >
      ←
    </div>
    <div className="cells" style={{ top: "53.32%", right: "33.3%" }} />
    <div className="cells" style={{ top: "53.32%", right: "26.64%" }} />
    <div className="cells" style={{ top: "53.32%", right: "19.98%" }} />
    <div className="cells" style={{ top: "53.32%", right: "13.32%" }} />
    <div className="cells b-start" style={{ top: "53.32%", right: "6.66%" }} />
    <div className="cells" style={{ top: "53.32%", right: 0 }} />
    <div className="cells" style={{ bottom: 0, left: "53.32%" }} />
    <div className="cells" style={{ bottom: "6.66%", left: "53.32%" }} />
    <div className="cells safe" style={{ bottom: "13.32%", left: "53.32%" }} />
    <div className="cells" style={{ bottom: "19.98%", left: "53.32%" }} />
    <div className="cells" style={{ bottom: "26.64%", left: "53.32%" }} />
    <div className="cells" style={{ bottom: "33.3%", left: "53.32%" }} />
    <div
      className="cells"
      style={{
        bottom: 0,
        left: "46.66%",
        textAlign: "center",
        fontSize: "x-large",
        color: "white"
      }}
    >
      ↑
    </div>
    <div className="cells red " style={{ bottom: "6.66%", left: "46.66%" }} />
    <div className="cells red" style={{ bottom: "13.32%", left: "46.66%" }} />
    <div className="cells red" style={{ bottom: "19.98%", left: "46.66%" }} />
    <div className="cells red" style={{ bottom: "26.64%", left: "46.66%" }} />
    <div className="cells red" style={{ bottom: "33.3%", left: "46.66%" }} />
    <div className="cells" style={{ bottom: 0, left: "40%" }} />
    <div className="cells r-start" style={{ bottom: "6.66%", left: "40%" }} />
    <div className="cells" style={{ bottom: "13.32%", left: "40%" }} />
    <div className="cells" style={{ bottom: "19.98%", left: "40%" }} />
    <div className="cells" style={{ bottom: "26.64%", left: "40%" }} />
    <div className="cells" style={{ bottom: "33.3%", left: "40%" }} />
    <div className="cells" style={{ top: "53.32%", left: "33.3%" }} />
    <div className="cells" style={{ top: "53.32%", left: "26.64%" }} />
    <div className="cells" style={{ top: "53.32%", left: "19.98%" }} />
    <div className="cells safe" style={{ top: "53.32%", left: "13.32%" }} />
    <div className="cells" style={{ top: "53.32%", left: "6.66%" }} />
    <div className="cells" style={{ top: "53.32%", left: 0 }} />
    <div className="cells green" style={{ top: "46.66%", left: "33.3%" }} />
    <div className="cells green" style={{ top: "46.66%", left: "26.64%" }} />
    <div className="cells green" style={{ top: "46.66%", left: "19.98%" }} />
    <div className="cells green" style={{ top: "46.66%", left: "13.32%" }} />
    <div className="cells green" style={{ top: "46.66%", left: "6.66%" }} />
    <div
      className="cells"
      style={{
        top: "46.66%",
        left: 0,
        textAlign: "center",
        fontSize: "x-large",
        color: "white"
      }}
    >
      →
    </div>
  </div>
</>

    </div>
  )
}

export default Ludo