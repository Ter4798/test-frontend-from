import React from "react";
import { Form } from "react-bootstrap";
import { BsCameraFill } from "react-icons/bs";
import axios from "axios";
const HomePage = () => {
  const [inputs, setInputs] = React.useState({
    userName: "",
    nickName: "",
    firstName: "",
    lastName: "",
    position: "",
    nationality: "",
    telephoneNumber: "",
    startingDate: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    postalCode: "",
    facebook: "",
    lineId: "",
    instagram: "",
    educations: [{ year: "", name: "" }],
    skills: [{ name: "", level: "" }],
    experiences: [{ company: "", position: "" }],
    interests: [""],
    guild: [""],
    image: "./avatar.png",
    backgroundImage: "/background.png",
  });

  const hiddenFileInput = React.useRef(null);
  const hiddenFileInputB = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleClickB = (event) => {
    hiddenFileInputB.current.click();
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const name = e.target.name;
    const value = base64;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(base64)
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    const apiUrl = "http://localhost:3000/users";
    const resp = await axios.post(apiUrl, {
      userName: inputs.userName,
      nickName: inputs.nickName,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      position: inputs.position,
      nationality: inputs.nationality,
      telephoneNumber: inputs.telephoneNumber,
      startingDate: inputs.startingDate,
      address: inputs.address,
      subdistrict: inputs.subdistrict,
      district: inputs.district,
      province: inputs.province,
      postalCode: inputs.postalCode,
      facebook: inputs.facebook,
      lineId: inputs.lineId,
      instagram: inputs.instagram,
      educations: inputs.educations,
      skills: inputs.skills,
      experiences: inputs.experiences,
      interests: inputs.interests,
      guild: inputs.guild,
      profileImage: inputs.image,
      backgroundImage: inputs.backgroundImage,
    });
    alert(resp.data.message);
  };

  const onChangeSkill = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    var copy = [...inputs.skills];
    copy[index][name] = value;
    setInputs((values) => ({ ...values, skills: copy }));
  };

  const onChangeEducation = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    var copy = [...inputs.educations];
    copy[index][name] = value;
    setInputs((values) => ({ ...values, educations: copy }));
  };

  const onChangeInterests = (event, index) => {
    const value = event.target.value;
    var copy = [...inputs.interests];
    copy[index] = value;
    setInputs((values) => ({ ...values, interests: copy }));
  };

  const onChangeGuild = (event, index) => {
    const value = event.target.value;
    var copy = [...inputs.guild];
    copy[index] = value;
    setInputs((values) => ({ ...values, guild: copy }));
  };

  const onChangeExperiences = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    var copy = [...inputs.experiences];
    copy[index][name] = value;
    setInputs((values) => ({ ...values, experiences: copy }));
  };

  const addSkill = () => {
    setInputs((values) => ({
      ...values,
      skills: [...inputs.skills, { name: "", level: "" }],
    }));
  };

  const addEducations = () => {
    setInputs((values) => ({
      ...values,
      educations: [...inputs.educations, { year: "", name: "" }],
    }));
  };

  const addExperiences = () => {
    setInputs((values) => ({
      ...values,
      experiences: [...inputs.experiences, { company: "", position: "" }],
    }));
  };

  const addInterests = () => {
    setInputs((values) => ({
      ...values,
      interests: [...inputs.interests, ""],
    }));
  };

  const addGuild = () => {
    setInputs((values) => ({
      ...values,
      guild: [...inputs.guild, ""],
    }));
  };

  return (
    <div className="border p-4">
      <form onSubmit={handleSubmit}>
        {/* user information */}
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
              src={inputs.image}
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
            <input
              type="file"
              name="image"
              ref={hiddenFileInput}
              style={{ display: "none" }}
              onChange={(e) => {
                uploadImage(e);
              }}
            />
            <button
              type="button"
              className="btn btn-light"
              onClick={handleClick}
              style={{
                top: 305,
                left: 260,
                position: "absolute",
                zIndex: 1,
                borderRadius: 25,
                height: 50,
                width: 50,
              }}
            >
              <BsCameraFill size="1.5em" color="black" />
            </button>

              <img  src={inputs.backgroundImage} style={{
                height: 300,
                width: 1500,
                position: "relative",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}/>
              <input
              type="file"
              name="backgroundImage"
              ref={hiddenFileInputB}
              style={{ display: "none" }}
              onChange={(e) => {
                uploadImage(e);
              }}
            />
              <button
                type="button"
                className="btn btn-light"
                onClick={handleClickB}
                style={{ top: 250, right: 30, position: "absolute" }}
              >
                <BsCameraFill size="1.5em" color="black" /> EDIT COVER PHOTO
              </button>

            <div className="row ">
              <div className="col-3"></div>
              <div className="col-8">
                <div className="row mt-3">
                  <div className="col-5 ">
                    <label className="form-label">
                      UserName
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="userName"
                      value={inputs.userName || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5">
                    <label className="form-label">
                      NICK NAME
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="nickName"
                      value={inputs.nickName || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-5 mt-3">
                    <label className="form-label">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="firstName"
                      value={inputs.firstName || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5  mt-3">
                  <label className="form-label">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="lastName"
                      value={inputs.lastName || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-5  mt-3">
                  <label className="form-label">
                      POSITION
                    </label>
                  <Form.Select aria-label="Please select" name="position" onChange={handleChange}>
                    <option>Please select</option>
                    <option value="developer">developer</option>
                    <option value="system analyst">system analyst</option>
                    <option value="tester">tester</option>
                  </Form.Select>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5  mt-3">
                    <label className="form-label">
                      NATIONALITY
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="nationality"
                      value={inputs.nationality || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-5  mt-3">
                    <label className="form-label">
                      TELEPHONE NUMBER
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="telephoneNumber"
                      value={inputs.telephoneNumber || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5  mt-3">
                    <label  className="form-label">
                      STARTING DATE
                    </label>
                    <input
                      type="date"
                      className="form-control h-50"
                      name="startingDate"
                      value={inputs.startingDate || ""}
                      onChange={handleChange}
                    />
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
                  <label className="form-label">ADDRESS</label>
                  <input
                    type="text"
                    className="form-control h-50"
                    placeholder="Address"
                    name="address"
                    onChange={handleChange}
                  />
                </div>
                {/* row 2 */}
                <div className="col-3 mt-3">
                <label className="form-label">
                       SUB DISTRICT
                    </label>
                  <Form.Select aria-label="Please select" name="subdistrict" onChange={handleChange}>
                    <option>Please select</option>
                    <option value="PakKred">Pakkred</option>
                    <option value="SaiNoi">SaiNoi</option>
                  </Form.Select>
                </div>
                <div className="col-3 mt-3">
                <label className="form-label">
                       DISTRICT
                    </label>
                  <Form.Select aria-label="Please select" name="district" onChange={handleChange}>
                    <option>Please select</option>
                    <option value="PakKred">Pakkred</option>
                    <option value="ThaIt">ThaIt</option>
                  </Form.Select>
                </div>
                <div className="col-3 mt-3">
                <label className="form-label">
                       PROVINCE
                    </label>
                  <Form.Select aria-label="Please select" name="province" onChange={handleChange}>
                    <option>Please select</option>
                    <option value="Nonthaburi">Nonthaburi</option>
                    <option value="Bangkok">Bangkok</option>
                  </Form.Select>
                </div>
                <div className="col-3 mt-3">
                <label className="form-label">
                       POSTAL CODE
                    </label>
                  <Form.Select aria-label="Please select" name="postalCode" onChange={handleChange}>
                    <option>Please select</option>
                    <option value="11110">11110</option>
                    <option value="10010">10010</option>
                  </Form.Select>            
                </div>   
                {/* row 3 */}
                <div className="col-4 mt-3">
                <label  className="form-label">
                      FACEBOOK
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="facebook"
                      value={inputs.facebook || ""}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-4 mt-3">
                <label  className="form-label">
                      LINE ID
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="lineId"
                      value={inputs.lineId || ""}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-4 mt-3">
                <label  className="form-label">
                      INSTAGRAM
                    </label>
                    <input
                      type="text"
                      className="form-control h-50"
                      name="instagram"
                      value={inputs.instagram || ""}
                      onChange={handleChange}
                    />
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
            <div className="col-4">
              <button
                type="button"
                style={{
                  borderRadius: 25,
                  backgroundColor: "#FFFFFF",
                  color: "#5F9EA0",
                  borderColor: "#5F9EA0",
                }}
                onClick={addEducations}
              >
                ADD EDUCATIONAL
              </button>
              {/* layout label */}
              <div className="row mt-3">
                <div className="col-6">
                  <label className="form-label">Year</label>
                </div>
                <div className="col-6">
                  <label className="form-label">Academy</label>
                </div>
              </div>

              {inputs.educations.map((education, index) => (
                <div key={index} className="row mt-1">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control h-75"
                      name="year"
                      value={education.year || ""}
                      onChange={(e) => onChangeEducation(e, index)}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control h-75"
                      name="name"
                      value={education.name || ""}
                      onChange={(e) => onChangeEducation(e, index)}
                    />
                  </div>
                </div>
              ))}
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
            <div className="col-2"></div>
            <div className="col-4">
              <button
                type="button"
                style={{
                  borderRadius: 25,
                  backgroundColor: "#FFFFFF",
                  color: "#5F9EA0",
                  borderColor: "#5F9EA0",
                }}
                onClick={addExperiences}
              >
                ADD EXPERIENCE
              </button>
              {/* layout label */}
              <div className="row mt-3">
                <div className="col-6">
                  <label className="form-label">Company</label>
                </div>
                <div className="col-6">
                  <label className="form-label">Position</label>
                </div>
              </div>

              {inputs.experiences.map((experience, index) => (
                <div key={index} className="row mt-1">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control h-75"
                      name="company"
                      value={experience.company || ""}
                      onChange={(e) => onChangeExperiences(e, index)}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control h-75"
                      name="position"
                      value={experience.position || ""}
                      onChange={(e) => onChangeExperiences(e, index)}
                    />
                  </div>
                </div>
              ))}
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
            <div className="col-4">
              <button
                type="button"
                style={{
                  borderRadius: 25,
                  backgroundColor: "#FFFFFF",
                  color: "#5F9EA0",
                  borderColor: "#5F9EA0",
                }}
                onClick={addSkill}
              >
                ADD SKILL
              </button>
              {/* layout label */}
              <div className="row mt-3">
                <div className="col-6">
                  <label className="form-label">Name</label>
                </div>
                <div className="col-6">
                  <label className="form-label">Level</label>
                </div>
              </div>

              {inputs.skills.map((skill, index) => (
                <div key={index} className="row mt-1">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control h-75"
                      // id="exampleInputEmail1"
                      name="name"
                      // {...register("names")}
                      value={skill.name || ""}
                      onChange={(e) => onChangeSkill(e, index)}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control h-75"
                      name="level"
                      // {...register("level")}
                      value={skill.level || ""}
                      onChange={(e) => onChangeSkill(e, index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-6"></div>
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
          <h4> INTERESTS INFORMATION</h4>
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-4">
              <button
                type="button"
                style={{
                  borderRadius: 25,
                  backgroundColor: "#FFFFFF",
                  color: "#5F9EA0",
                  borderColor: "#5F9EA0",
                }}
                onClick={addInterests}
              >
                ADD INTERESTS
              </button>
              {/* layout label */}


              {inputs.interests.map((interest, index) => (
                <div key={index} className="row mt-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control h-75"
                      value={interest || ""}
                      onChange={(e) => onChangeInterests(e, index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-6"></div>
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
          <h4> GUILD INFORMATION</h4>
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-4">
              <button
                type="button"
                style={{
                  borderRadius: 25,
                  backgroundColor: "#FFFFFF",
                  color: "#5F9EA0",
                  borderColor: "#5F9EA0",
                }}
                onClick={addGuild}
              >
                ADD GUILD
              </button>
              {/* layout label */}
 

              {inputs.guild.map((guildData, index) => (
                <div key={index} className="row mt-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control h-75"
                      value={guildData || ""}
                      onChange={(e) => onChangeGuild(e, index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="container mt-5">
        <button type="submit" className="btn btn-primary rounded-pill container" >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
