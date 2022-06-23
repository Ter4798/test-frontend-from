import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsCameraFill } from "react-icons/bs";
import { ProgressBar } from "react-bootstrap";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = React.useState([]);

  React.useEffect(() => {
    const getData = async (id) => {
      try {
        const resp = await axios.get("http://localhost:3000/users/" + id);
        // console.log(resp.data.data);

        setDetail(resp.data.data);
        // console.log(detail.skill.name)

      } catch (error) {
        return (
          <div className="text-center mt5">
            <p>connect failed</p>
          </div>
        );
      }
    };

    getData(id);
  }, [id]);

  return (
    <div className="border p-4">
      <div
        className="border"
        style={{
          padding: 25,
          borderRadius: 15,
          boxShadow: "1px 2px 9px #F4AAB9",
        }}
      >
        <h4>USER INFORMATION</h4>
        <div
          className="border mt-4"
          style={{
            height: 660,
            width: 1500,
            marginRight: "auto",
            marginLeft: "auto",
            borderRadius: 15,
            position: "relative",
            boxShadow: "1px 2px 9px #F4AAB9",
          }}
        >
          <img
            src={detail.profileImage}
            style={{
              top: 150,
              left: 60,
              position: "absolute",
              zIndex: 1,
              backgroundColor: "aqua",
              borderRadius: 125,
              height: 250,
              width: 250,
              borderStyle: "solid",
              borderColor: "#FFFFFF",
            }}
          />
          <div>
          <img  src={detail.backgroundImage} style={{
                height: 300,
                width: 1500,
                position: "relative",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}/>
              
            </div>
            <div className="row ">
              <div className="col-3"></div>
              <div className="col-8">
                <div className="row mt-3">
                  <div className="col-5 ">
                    <h5>USER NAME</h5>

                    <p>{detail.userName}</p>

                  </div>
                  <div className="col-1"></div>
                  <div className="col-5">
                    <h5>NICK NAME</h5>

                    <p>{detail.nickName}</p>

                  </div>
                  <div className="col-5 mt-3">
                  <h5>FIRST NAME</h5>
                 
                    <p>{detail.firstName}</p>
  
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5  mt-3">
                  <h5>LAST NAME</h5>
                 
                    <p>{detail.lastName}</p>
                  </div>
                  <div className="col-5  mt-3">
                  <h5>POSITION</h5>
                 
                    <p>{detail.position}</p>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5  mt-3">
                  <h5>NATIONALITY</h5>
                 
                    <p>{detail.nationality}</p>
                  </div>
                  <div className="col-5  mt-3">
                  <h5>TELEPHONE NUMBER</h5>
                 
                    <p>{detail.telephoneNumber}</p>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5  mt-3">
                  <h5>STARTING DATE</h5>
                 
                    <p>{detail.startingDate}</p>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
        </div>
      </div>

        {/* contact information */}

        <div
          className="border mt-5"
          style={{
            padding: 25,
            borderRadius: 15,
            boxShadow: "1px 2px 9px #F4AAB9",
          }}
        >
          <h4>CONTACT INFORMATION</h4>
          <div
            className="row mt-4"
            style={{
              height: 250,
              width: 1500,
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row">
                {/* row 1 */}
                <div className="col-12">
                <h5>ADDRESS</h5>
                 
                 <p>{detail.address}</p>
                </div>
                {/* row 2 */}
                <div className="col-3 mt-3">
                <h5>SUB DISTRICT</h5>
                 
                 <p>{detail.subdistrict}</p>
                </div>
                <div className="col-3 mt-3">
                <h5>DISTRICT</h5>
                 
                 <p>{detail.district}</p>
                </div>
                <div className="col-3 mt-3">
                <h5>PROVINCE</h5>
                 
                 <p>{detail.province}</p>
                </div>
                <div className="col-3 mt-3">
                <h5>POSTAL CODE</h5>
                 
                 <p>{detail.postalCode}</p>           
                </div>   
                {/* row 3 */}
                <div className="col-3 mt-3">
                <h5>FACEBOOK</h5>
                 
                 <p>{detail.facebook}</p> 
                </div>
                <div className="col-3 mt-3">
                <h5>LINE ID</h5>
                 
                 <p>{detail.lineId}</p>
                </div>
                <div className="col-3 mt-3">
                <h5>INSTAGRAM</h5>
                 
                 <p>{detail.instagram}</p>
                </div>
                <div className="col-3 mt-3">
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>

        {/* educational information */}

        <div
          className="border mt-5"
          style={{
            padding: 25,
            borderRadius: 15,
            boxShadow: "1px 2px 9px #F4AAB9",
          }}
        >
          <h4> EDUCATIONAL INFORMATION</h4>
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="timeline col-4">

              {detail.educations?.map((education,index) => (
              <div key = {index} className="row ">
                <div className=" col-6" style={{textAlign: "right" }}>
                  <p>{education.year}</p>
                </div>
                <div className="line2 move-circle col-6" style={{textAlign: "left"}}>
                <p>{education.name}</p>
                </div>
              </div>                
              ) )}

            </div>
            <div className="col-6"></div>
          </div>
        </div>


        {/* experience information */}
        <div
          className="border mt-5"
          style={{
            padding: 25,
            borderRadius: 15,
            boxShadow: "1px 2px 9px #F4AAB9",
          }}
        >
          <h4> EXPERIENCE INFORMATION</h4>
          <div className="row mt-3">
            <div className="col-1"></div>
            <div className="timeline col-4">

              {detail.experiences?.map((experience,index) => (
              <div key = {index} className="row">
                <div className="line right col-6" >
                 <p>{experience.company}<br/><small>{experience.position}</small></p>

    
                </div>
                {/* <div className="in-timeline2 col-6" style={{textAlign: "left"}}>
                <p>{skillData.level}</p>
                </div> */}
              </div>                
              ) )}

            </div>
            <div className="col-6"></div>
          </div>
        </div>

        {/* skill information */}
        <div
          className="border mt-5"
          style={{
            padding: 25,
            borderRadius: 15,
            boxShadow: "1px 2px 9px #F4AAB9",
          }}
        >
          <h4> SKILL INFORMATION</h4>
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-6">

              {/* layout label */}

              
              {detail.skills?.map((skill,index) => (
              <div key = {index} className="row mt-3 ">
                <div className="col-4" style={{textAlign: "center"}}>
                  <p>{skill.name}</p>
                </div>
                <div className="col-4" style={{textAlign: "center"}}>
                <p>{skill.level}</p>
                </div>
                <div className="col-4 mt-2">
                 <ProgressBar now={skill.level} min={0} max={10} />
                </div>
              </div>                
              ) )}

            </div>
            <div className="col-4"></div>
          </div>
        </div>

        {/* interests information */}
        <div
          className="border mt-5"
          style={{
            padding: 25,
            borderRadius: 15,
            boxShadow: "1px 2px 9px #F4AAB9",
          }}
        >
          <h4>INTERESTS INFORMATION</h4>
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-8 d-flex justify-content-start">
              
              {detail.interests?.map((interestsData,index) => (
              <div key = {index} className="button-interests mt-3">
                  <p>{interestsData}</p>
              </div>                
              ) )}

            </div>
            <div className="col-2"></div>
          </div>
        </div>

        {/* guild information */}
        <div
          className="border mt-5"
          style={{
            padding: 25,
            borderRadius: 15,
            boxShadow: "1px 2px 9px #F4AAB9",
          }}
        >
          <h4>GUILD INFORMATION</h4>
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-8 d-flex justify-content-start">
              
              {detail.guild?.map((guildData,index) => (
              <div key = {index} className="button-interests mt-3">
                  <p>{guildData}</p>
              </div>                
              ) )}

            </div>
            <div className="col-2"></div>
          </div>
        </div>

    </div>
  );
};

export default DetailPage;
