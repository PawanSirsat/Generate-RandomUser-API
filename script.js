const nextButton = document.getElementById('next-button')

const userCard = document.getElementById('user-card')

async function fetchUserData() {
  try {
    const response = await fetch('https://random-data-api.com/api/v2/users')
    const userData = await response.json()
    displayUserData(userData)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function displayUserData(userData) {
  userCard.innerHTML = `
                <img src="${userData.avatar}" alt="User Avatar" class="user-image">

                <div class="user-data-left">

                <div class="user-data-field">
                    <span class="user-data-label">ID:</span> ${userData.id}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">UID:</span> ${userData.uid}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Password:</span> ${userData.password}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">First Name:</span> ${userData.first_name}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Last Name:</span> ${userData.last_name}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Username:</span> ${userData.username}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Email:</span> ${userData.email}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Gender:</span> ${userData.gender}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Phone Number:</span> ${userData.phone_number}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Date of Birth:</span> ${userData.date_of_birth}
                </div>

                <div class="user-data-field">
                    <span class="user-data-label">Social Insurance Number:</span> ${userData.social_insurance_number}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Employment Title:</span> ${userData.employment.title}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Employment Key Skill:</span> ${userData.employment.key_skill}
                </div>
                                </div>

                        <div class="user-data-right">

                <div class="user-data-field">
                    <span class="user-data-label">Address:</span>
                    <div class="user-data-field">City: ${userData.address.city}</div>
                    <div class="user-data-field">Street Name: ${userData.address.street_name}</div>
                    <div class="user-data-field">Street Address: ${userData.address.street_address}</div>
                    <div class="user-data-field">Zip Code: ${userData.address.zip_code}</div>
                    <div class="user-data-field">State: ${userData.address.state}</div>
                    <div class="user-data-field">Country: ${userData.address.country}</div>
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Coordinates:</span>
                    <div class="user-data-field">Latitude: ${userData.address.coordinates.lat}</div>
                    <div class="user-data-field">Longitude: ${userData.address.coordinates.lng}</div>
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Credit Card Number:</span> ${userData.credit_card.cc_number}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Subscription Plan:</span> ${userData.subscription.plan}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Subscription Status:</span> ${userData.subscription.status}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Subscription Payment Method:</span> ${userData.subscription.payment_method}
                </div>
                <div class="user-data-field">
                    <span class="user-data-label">Subscription Term:</span> ${userData.subscription.term}
                </div>
                </div>
                <!-- Add more data fields here -->
            `
}
nextButton.addEventListener('click', displayUserData)

fetchUserData()
