# Sri Aravind Store - Mobile Application

This repository contains the mobile application code for **Sri Aravind Store**, an e-commerce platform for browsing and purchasing various products. The app was initially developed using **React Native**, and efforts are underway to migrate the application to **Flutter** for better performance and cross-platform compatibility.

## Migration Overview

The application was originally built with React Native, but the decision was made to migrate to Flutter due to the following reasons:

- **Improved Performance**: Flutter provides a smoother user experience with native-like performance.
- **Cross-Platform Consistency**: Flutter allows for better consistency between iOS and Android apps.
- **Faster Development**: Flutter's hot reload feature and widget-based architecture make the development process more efficient.

## Issues with Migration

During the migration from **React Native** to **Flutter**, we encountered several issues that resulted in failed tests, including:

- **Dependency Conflicts**: Some of the libraries and dependencies used in the React Native version were not directly compatible with Flutter, leading to build failures.
- **UI Layout Issues**: There were several UI layout mismatches between the React Native app and the Flutter version, causing inconsistencies in the user interface.
- **State Management**: The migration from React’s state management (using hooks and context) to Flutter’s own state management system (like Provider or Riverpod) led to difficulties in ensuring consistent app behavior.
- **Testing Failures**: Some automated tests designed for the React Native application failed during the migration due to differences in how the two frameworks handle navigation, state, and component rendering.

## Technologies Used

- **React Native** (Previous Version): JavaScript-based framework for building cross-platform mobile applications.
- **Flutter** (Current Version): UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.
- **Firebase**: Backend-as-a-Service for user authentication, real-time database, and notifications.
- **Provider**: State management solution used in the Flutter version of the app.

## Installation

To run the current Flutter version of the app, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sri-aravind-store.git
