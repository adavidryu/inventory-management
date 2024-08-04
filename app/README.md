# Simple Inventory Management System

## Overview

This project is a straightforward, user-friendly inventory management system built with Next.js, Firebase, and Material-UI (MUI). It allows users to easily add, remove, and track items in their inventory in real-time, all with a sleek and responsive interface.

## Features

- **Add New Items**: Quickly add new items to your inventory with a simple modal interface.
- **Real-time Updates**: See your inventory change in real-time as items are added or removed.
- **Intuitive UI**: Clean and responsive design using Material-UI components for easy navigation and use.
- **Quantity Management**: Easily increase or decrease the quantity of each item.

## Technologies Used

- Next.js 13+ (with App Router)
- React.js
- Firebase (Firestore)
- Material-UI (MUI)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Firebase account and project

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/inventory-management-system.git
   ```

2. Navigate to the project directory:
   ```
   cd inventory-management-system
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Set up your Firebase configuration:
   - Create a `.env.local` file in the root directory
   - Add your Firebase config details:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     ```

5. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

- Click "Add New Item" to add an item to your inventory.
- Use the "Add" and "Remove" buttons next to each item to adjust quantities.
- Scroll through your inventory list to view all items.
- Enjoy the responsive and user-friendly interface powered by Material-UI components.

## UI Components

This project extensively uses Material-UI (MUI) for its user interface. Some of the key MUI components used include:

- `Box`: For layout and spacing
- `Button`: For actions like adding and removing items
- `Modal`: For the "Add New Item" dialog
- `TextField`: For input in the "Add New Item" form
- `Typography`: For text elements throughout the app
- `Stack`: For arranging elements in vertical or horizontal stacks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Next.js and Firebase communities for their excellent documentation and resources.
- Special thanks to the Material-UI team for providing a comprehensive set of React components that significantly enhanced the UI of this project.

Happy inventorying!