# Skillshare Marketing Engineer Challenge 🚀

Welcome! This challenge is designed to be lightweight (~45 mins) and focuses on **UI fidelity, SEO, and Data Connection**.

## 🛠 Setup
1. Run `npm install` and `npm run dev`.
2. Open `http://localhost:3000`.

## 📝 The Challenge

### Part 1: The Component (Frontend)
Create a component based on the instructions of your interviewer

### Part 2: The Data (GraphQL)
In `query.graphql`, write a query to fetch the data, your interviewer will provide the details

#### Using the GraphQL API

A GraphQL API is available at `/api/graphql`. You can:

1. **Test queries in the browser**: Visit `http://localhost:3000/api/graphql` to access the GraphQL Playground
2. **Use the helper function** in your component:
```typescript
import { executeQuery } from '@/lib/graphqlClient';
