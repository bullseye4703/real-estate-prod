
# Real-Estate Rental Platform

A comprehensive full-stack web application that enables property managers to list apartments and villas for rent and tenants to search, favorite, apply, and pay rent through an intuitive interface with map-based navigation.

## 🌟 Project Overview

The **Real-Estate Rental Platform** is designed to simplify property management and renting. Managers can create and manage property listings, set prices, and track tenant applications. Tenants can explore properties using a dynamic map, apply for rentals, and complete payments — all from a unified dashboard experience.

This platform integrates cutting-edge technologies like **Next.js**, **Tailwind CSS**, **Prisma**, **AWS Cognito**, and **Mapbox**, providing a scalable, secure, and interactive solution for real estate needs.

## ✅ Key Features

### 🔑 Authentication & Security
- Secure user authentication via **AWS Cognito**
- Role-based access: managers vs. tenants
- Protected API endpoints

### 🏠 Property Management (For Managers)
- Add, edit, and remove property listings
- Define rental prices and details
- View tenant applications and manage requests

### 🗺 Tenant Dashboard
- Interactive property search using **Mapbox**
- Filter properties by location, price, and other criteria
- Favorite properties for quick access
- Apply for rentals and track status
- Make rent payments with ease

### 📊 Real-Time Insights
- Application tracking for both managers and tenants
- Payment history and notifications
- Responsive dashboards with performance-optimized data handling

## 🛠 Technology Stack

### Frontend
- **Next.js** with **TypeScript** for server-side rendering and routing
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Redux Toolkit** for state management
- **shadcn/ui** for UI components
- **Prisma Client** for interacting with the database

### Backend
- **Node.js** with **TypeScript**
- **PostgreSQL** hosted on **AWS RDS**
- **Prisma ORM** for efficient data modeling and access
- **AWS Cognito** for user authentication
- Hosted on **AWS EC2**

### APIs & Integrations
- **Mapbox** for map-based property browsing
- Secure RESTful API endpoints for data exchange

## 📂 Folder Structure
```

### Client

client/
├── public/              # Static files and assets
├── src/
│   ├── app/             # Routes, pages, layouts
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── state/           # Redux state slices
│   └── types/           # TypeScript interfaces and types
├── .env                 # Environment configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind settings
├── postcss.config.mjs   # PostCSS configuration
└── package.json         # Dependencies and scripts

### Server

server/
├── prisma/              # Database schema and migrations
├── src/
│   ├── controllers/     # API logic handlers
│   ├── middleware/      # Authentication and request interceptors
│   ├── routes/          # API endpoints definition
│   └── index.ts         # Server entry point
├── .env                 # Environment configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
├── ecosystem.config.js  # PM2 deployment configuration
└── aws-ec2-instructions.md # EC2 deployment guide
```
## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14+)
- PostgreSQL or AWS RDS setup
- AWS account with Cognito, EC2, and RDS access
- Mapbox account for API key

### ✅ Backend Setup

1. Clone the repository
   ```
   bash
   git clone https://github.com/bullseye4703/real-1.git
   cd real-1/server  
   ```

3. Install dependencies
4. ```
   bash
   npm install
   ```
  
5. Configure environment variables in ```.env```
6. ```
   env
   DATABASE_URL="postgresql://user:password@host:port/dbname"
   COGNITO_REGION="your-region"
   COGNITO_USER_POOL_ID="your-user-pool-id"
   COGNITO_CLIENT_ID="your-client-id"
   ```

7. Run Prisma migrations
8. ```
   bash
   npx prisma migrate deploy
   ```

9. Start the server
   ```
   bash
   npm run dev
   ```

### ✅ Frontend Setup

1. Navigate to the frontend directory
   ```
   bash
   cd ../client
   ```

3. Install dependencies
  ```
   bash
   npm install
  ```

5. Configure environment variables in \`.env\`
   ```
   env
   NEXT_PUBLIC_MAPBOX_API_KEY="your-mapbox-key"
   NEXT_PUBLIC_COGNITO_REGION="your-region"
   NEXT_PUBLIC_COGNITO_USER_POOL_ID="your-user-pool-id"
   NEXT_PUBLIC_COGNITO_CLIENT_ID="your-client-id"
   ```

7. Start the development server
   ```
   bash
   npm run dev
   ```
   
8. Open your browser at [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

- Backend is deployed on **AWS EC2** using **PM2** for process management.
- Database is hosted on **AWS RDS**.
- Authentication is powered by **AWS Cognito**.
- Map features are powered by **Mapbox**.
- Deployment steps are detailed in \`server/aws-ec2-instructions.md\`.

## 🔐 Environment Variables Summary

**Backend (\`server/.env\`)**  
```
env
DATABASE_URL="postgresql://user:password@host:port/dbname"
```

**Frontend (\`client/.env\`)**  
```
env
NEXT_PUBLIC_MAPBOX_API_KEY="your-mapbox-key"
NEXT_PUBLIC_COGNITO_REGION="your-region"
NEXT_PUBLIC_COGNITO_USER_POOL_ID="your-user-pool-id"
NEXT_PUBLIC_COGNITO_CLIENT_ID="your-client-id"
```

## 📸 Screenshots

*Add relevant screenshots here for:*
- Manager’s property listing dashboard
- Tenant’s map view with filters
- Application and payment interfaces
- Authentication flows

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 💡 Future Enhancements

- Add payment gateway integration
- Improve user notifications and alerts
- Support for image uploads and multimedia content
- Enhance analytics and reporting tools
- Implement automated backups for database

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome! Please fork the repository and create a pull request.

## 📞 Contact

For support or inquiries, please contact:  
**SHIVAM RAJ**  
📧 srshahi4703@gmail.com 
🌐 [Portfolio](https://portfolio-six-sigma-xut47e403k.vercel.app/)
