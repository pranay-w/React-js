import  "../style/Cards.css"
import png from "../assets/icon.png"

const Cards = (props) => {
  return (
    <>
    <div className="card">
        <div className="top">
            <div className="logo">
                <img src={props.link} alt="" />
            </div>
            <div className="save">
                <button>
                    <p>Save</p>
                    <img src={png} alt="" />
                </button>
            </div>
        </div>
        <div className="center">
            <div className="company">
                <div className="companyname">{props.company}</div>
                <div className="days">{props.duration}</div>
            </div>
            <div className="job">{props.job}</div>
            <div className="mbottom">
                <div className="mode">{props.mode}</div>
                <div className="post">{props.post}</div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottomleft">
                <div className="stipend">{props.stipend}</div>
                <div className="country">{props.country}</div>
            </div>
            <div className="bottomright">
                <button onClick={()=>window.open(props.apply,"_blank")}>Apply now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards