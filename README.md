# Ascenders Adventure

A modern full-stack web application for discovering and exploring trek adventures. Built with Next.js 15, Ascenders Adventure provides an intuitive platform for users to browse, filter, and learn about various trekking destinations with advanced search capabilities and responsive design.

## Overview

Ascenders Adventure leverages contemporary web technologies to deliver a seamless user experience for trek exploration. The application combines server-side rendering, robust database management, and secure authentication to create a comprehensive trekking discovery platform.

## Key Features

- **Advanced Trek Discovery**: Browse and explore a curated collection of trek adventures with detailed information
- **Smart Filtering System**: Filter treks by difficulty, duration, location, and other relevant criteria
- **Secure Authentication**: User authentication powered by NextAuth.js with Prisma adapter
- **Responsive Design**: Fully optimized interface that works seamlessly across all devices
- **Modern Stack**: Built on Next.js 15 with server-side rendering and static site generation
- **Modular Architecture**: Component-based structure for maintainability and scalability
- **Type-Safe Database**: Prisma ORM for reliable and type-safe database operations

## Technology Stack

**Frontend**
- Next.js 15 (React Framework)
- Tailwind CSS (Styling)
- Lucide (Icons)
- TypeScript

**Backend**
- Next.js API Routes
- Prisma ORM
- NextAuth.js (Authentication)
- PostgreSQL/MySQL (Database)

**Development Tools**
- ESLint
- PostCSS
- TypeScript

## Project Structure
```
ascenders-adventure1/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       ├── about/
│       ├── contact/
│       └── treks/
│           ├── page.tsx
│           └── [id]/
├── components/
│   ├── TrekCard.tsx
│   ├── FilterPanel.tsx
│   └── ...
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
├── .env
├── next.config.ts
├── package.json
└── tailwind.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- PostgreSQL or MySQL database

### Installation
```bash
# Clone the repository
git clone https://github.com/kaleemullah6698/ascenders-adventure1.git

# Navigate to project directory
cd ascenders-adventure1

# Install dependencies
npm install

# Set up environment variables
# Create a .env file and configure your database and authentication credentials

# Generate Prisma Client
npx prisma generate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="your_database_connection_string"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio
```

## Contributing

This project is currently private. For collaboration opportunities or inquiries, please contact the repository owner.

### Core Contributors

- **Mahd Umer** - Developer 
- **Kaleem Ullah** - Developer
- **Zahra** - Developer
- **Aleen Zia** - Developer

## Documentation

For more information about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is private and proprietary. All rights reserved.

## Support

For questions, issues, or feature requests, please contact the project maintainers or open an issue in the repository.

---

**Built with Next.js** | **Powered by Prisma** | **Secured with NextAuth.js**
