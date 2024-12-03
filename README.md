# Equipment Management Frontend
## Technologies Used

- React
- Vite
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Recharts
- Axios
- React Query
- Docker

## Prerequisites

- Node.js (v20+)
- PNPM
- Docker (optional)

## Setup and Installation

### Local Development

1. Clone the repository
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies
```bash
pnpm install
```

2. Set env "VITE_API_URL=http://localhost:3000" in .env file

3. Run the development server
```bash
pnpm dev
```

### Docker Deployment

```bash
# Build and run production container
docker-compose up --build
```

## HTTP Client and Data Management

### Axios
- Centralized HTTP request configuration
- Base URL and default headers configuration

### React Query (TanStack Query)
- Efficient data fetching and caching
- Automatic background updates
- Simplified state management for asynchronous data

#### Key Query Handling Features
- Loading states
- Error management
- Automatic retry mechanisms
- Optimistic updates

### Example Query Structure
```typescript
export const useEquipments = () => {
  return useQuery( {
    queryKey: ['equipments'],
    queryFn: async () => {
      const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(2000);  
      const { data } = await api.get('/equipments');
      return data;
    },
  })
};
```

## Main Screen: Equipment Listing

### Features
- Full list of equipment with associated reports
- Performance metrics visualization using Recharts

### Data Visualization
- Line charts showing equipment performance
- Aggregate statistics

## Performance Optimization
- React Query caching
- Minimal re-renders
- Efficient data fetching

## Future Improvements
- Advanced filtering capabilities
- New Pages
- User authentication