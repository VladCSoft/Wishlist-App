import React from 'react';
import myprofile from '../public/myprofile.png'

function Profile() {
  return (
    <div> 
	<div class="container">
    <div class="profile-card">
      <div class="card-info">
      <img src= "/myprofile.png" />
        <h3>Vlad Cojocaru</h3>
        <span>Developer</span>
        <div class="btns">
        </div>
      </div>
    </div>

    <div class="profile-main">
      <h3 class="profile-title">Profile Account</h3>
      <form class="main-content" action="">
        <div class="form-input">
          <label for="fname">First Name:</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label for="lname">Last Name:</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label for="mobile-number">Email:</label>
          <input type="email" />
        </div>
        <div class="form-input">
          <label for="interests">Phone:</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label for="occupation">Address:</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label for="occupation">Birthday Date:</label>
          <input type="text" />
        </div>
        <button type="button" class="button-element"> Edit </button>
      </form>
      
    </div>
  </div>
	</div>
  );
}

export default Profile;