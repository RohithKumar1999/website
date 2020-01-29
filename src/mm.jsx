import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

const ProjectsPage = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Stock Prediction using Machine Learning</h2>
      <p className='grey-text w-responsive mx-auto mb-5'>
       
      </p>

      <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(http://www.eliteresearch.in/blog/wp-content/uploads/2017/10/stock-advisory-company-768x512.jpg)'
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              
              <h3 className='py-3 font-weight-bold'>
                <strong></strong>
              </h3>
              <p className='pb-3'>
              The Project mainly focuses on the Headlines of the Company Website and notes the value for Stock increased or Decreased.</p>
        <p>0-Stock Decreased</p>
        <p>1-Stock Increased</p>
              <MDBBtn color='secondary' rounded size='md'>
                <MDBIcon far icon='clone' className='left' /> click here
              </MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'
            }}
          >
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ProjectsPage;