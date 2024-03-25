# Fitness App
The Fitness App is a mobile application that allows users to search for exercises, select them, and create customized workout routines. Users can search for exercises based on specific body parts, view exercise details, and add exercises to their workout routine.

### Features
- **Login/Signup:** Users can sign up for an account and securely log in to their account.

- **Workout Templates:** Users can customize thier workout by creating a workout template.

- **Exercise Search:** Users can search for exercises by entering keywords related to specific body parts or exercise names.

- **Exercise Selection:** Users can select exercises from the search results and add them to their workout routine.

- **Exercise Details:** Detailed information about each exercise, including exercise name, target body part, and instructions, is displayed when the user selects an exercise.

- **Customizable Workout Routine:** Users can customize their workout routine by adding multiple exercises, specifying sets and reps for each exercise.

- **Saved Templates:** Users can save their workout templates for a later use.

## Video Walkthrough

Here's a walkthrough of the features:

Login/Signup:


<img src='https://i.imgur.com/kMgYVsb.gif' title='Login/SignUp' width='' alt=':Login/SignUp' />

Exercises API:

<img src='https://i.imgur.com/3OOGaYf.gif' title='Exercises' width='' alt='Exercises' />

Create Template:

<img src='https://i.imgur.com/NC2USH6.gif' title='Workout' width='' alt='Workout' />



### Technologies Used
- **React Native:** The app is built using the React Native framework, allowing for cross-platform compatibility and native-like performance.

- **TailwindCSS(NativeWind):** The app used NativeWind in conjunction with React Native to provide rapid styling and layout capabilities.

- **Expo Router Navigation:** Navigation within the app is managed using Expo Router, providing seamless transitions between screens and a smooth user experience.

- **API Integration:** The app integrates with Rapid API to fetch exercise data, including exercise names, instructions, and GIF images.

- **Responsive Design:** The app is designed to adapt to various screen sizes and orientations, ensuring a consistent user experience across different devices.

- **React Native Animation:** The app is animated uisng React Native Reanimated, providing a stunning user experience.

### Prerequisites

Before running this app, please make sure you have the following software installed:

- Xcode: You will need Xcode to run this app on an iOS simulator or device. You can download Xcode for free from the App Store on macOS.

### Installation
To run the Workout App locally on your machine, follow these steps:

1. Clone the GitHub repository: 

git clone https://github.com/Junstinr/fitness-app

2. Navigate to the project directory:
    cd workout-app

3. Install dependencies using npm or yarn:
    
npm install

*or*

yarn install

4. Start the development server:
    
npm start

*or*

yarn start

5. Open the Expo app on your mobile device and scan the QR code displayed in the terminal to view the app.

### Usage
1. **Signup/Login:** Sign for for an account and log in

2. **Search for Exercises:** Enter keywords related to specific body parts or exercise names in the search bar to find relevant exercises.

3. **Select Exercises:** Tap on an exercise from the search results to add it to your workout routine.

4. **Customize Workout Routine:** Specify the number of sets and reps for each exercise in your workout routine.

5. **View Workout Details:** Review your customized workout routine, including selected exercises, sets, and reps.

6. **Save Workout:** Save your workout routine for future reference or share it with friends.

### Contributing
Contributions to the Workout App are welcome! If you find any bugs, have feature requests, or would like to contribute code improvements, please submit a pull request.

## TODO

Features to Implement
- [ ] User should be able to save thier workout template.
- [ ] Render saved templates from the user's database
- [ ] User should be able to Log Out of thier account
- [ ] Add functionality to track user progress and workout history.
- [ ] User should be able to upload a profile picture


Bug Fixes

- [ ] Fix issue with resetting sets when adding new exercises.
- [ ] Resolve rendering issues with exercise sets in certain screen sizes.
- [ ] Address styling inconsistencies across different screens and devices.
- [ ] Fix alignment issues with text inputs and buttons in exercise selection modal.
- [ ] Handle edge cases and unexpected user inputs gracefully to prevent app crashes.
- 