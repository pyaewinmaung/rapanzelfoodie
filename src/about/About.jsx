import React from "react";

const About = () => {

  // fetch('http://127.0.0.1:8000/api/user').then(response=>response.json()).then(data=>console.log(data));


  fetch('http://127.0.0.1:8000/api/user')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

  return (
    // <div>

    //   <body className="bg-secondary mx-5 rounded text-light p-3 shadow">
    //     <section className="about-section text-center">
    //       <div className="container">
    //         <h2 className="mb-4 fw-bold">About Us</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    //           euismod leo vel metus laoreet, at dignissim libero accumsan.
    //         </p>
    //       </div>
    //     </section>

    //     <section className="team-section">
    //       <div className="container">
    //         <h2 className="mb-4 text-center">Our Team</h2>

    //         <div className="row">
    //           <div className="col-md-4 mb-4">
    //             <div className="card">
    //               <img
    //                 src="./image/phyu.jpg"
    //                 className="card-img-top"
    //                 alt="Team Member 1"
    //               />
    //               <div className="card-body">
    //                 <h5 className="card-title">ကွယ်ကွယ်</h5>
    //                 <p className="card-text">Position - ဒီကစောင့်နေသူ</p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 mb-4">
    //             <div className="card">
    //               <img
    //                 src="./image/saw.jpg"
    //                 className="card-img-top"
    //                 alt="Team Member 2"
    //               />
    //               <div className="card-body">
    //                 <h5 className="card-title">ဖြူဖြူမြင့်</h5>
    //                 <p className="card-text">Position - ဘဲထိပ်ထားစံ</p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 mb-4">
    //             <div className="card">
    //               <img
    //                 src="./image/pyae.jpg"
    //                 className="card-img-top"
    //                 alt="Team Member 3"
    //               />
    //               <div className="card-body">
    //                 <h5 className="card-title">ကိုပြည့်</h5>
    //                 <p className="card-text">Position - FA</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </body>
    // </div>

    <>
      <section>
        <div className="container">
          <div className="bg-secondary mx-5 rounded text-light p-3 shadow aboutuss">
            <div className="about-section text-center">
              <h2 className="mb-4 fw-bold">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod leo vel metus laoreet, at dignissim libero accumsan.
              </p>
            </div>
            <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card aboutcards">
                <img
                  src="./image/phyu.jpg"
                  className="card-img-top"
                  alt="Team Member 1"
                />
                <div className="card-body">
                  <h5 className="card-title">ကွယ်ကွယ်</h5>
                  <p className="card-text">Position - ဒီကစောင့်နေသူ</p>
                </div>
              </div>
            </div>  

            <div className="col-md-4 mb-4">
                <div className="card aboutcards">
                  <img
                    src="./image/saw.jpg"
                    className="card-img-top"
                    alt="Team Member 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">ဖြူဖြူမြင့်</h5>
                    <p className="card-text">Position - ဘဲထိပ်ထားစံ</p>
                  </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card aboutcards">
                  <img
                    src="./image/pyae.jpg"
                    className="card-img-top"
                    alt="Team Member 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">ကိုပြည့်</h5>
                    <p className="card-text">Position - FA</p>
                  </div>
                </div>
            </div>
            
          </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default About;
