import { createYoga, createSchema } from 'graphql-yoga';
import { sampleClasses } from '@/data/mockData';

const typeDefs = `
  type SkillshareClass {
    id: ID!
    title: String!
    coverImage: String!
    totalStudents: Int!
    category: String!
    teacher: Teacher!
  }

  type Teacher {
    name: String!
  }

  type Query {
    classes(category: String, limit: Int, sortBy: String): [SkillshareClass]
  }
`;

// Define resolvers that work with the mock data
const resolvers = {
  Query: {
    classes: (
      _: unknown,
      args: { category?: string; limit?: number; sortBy?: string }
    ) => {
      // Transform mock data to match GraphQL schema
      let results = sampleClasses.map((cls) => ({
        id: cls.id,
        title: cls.title,
        coverImage: cls.thumbnailUrl,
        totalStudents: cls.studentCount,
        category: cls.category,
        teacher: {
          name: cls.teacherName,
        },
      }));

      // Filter by category
      if (args.category) {
        results = results.filter((cls) =>
          cls.category.toLowerCase().includes(args.category!.toLowerCase())
        );
      }

      // Sort by field
      if (args.sortBy === 'totalStudents') {
        results.sort((a, b) => b.totalStudents - a.totalStudents);
      }

      // Limit results
      if (args.limit) {
        results = results.slice(0, args.limit);
      }

      return results;
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };

