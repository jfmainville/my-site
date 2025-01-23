#!/bin/sh

# Run the Prisma migration
echo "Starting Prisma migration..."
npx prisma migrate deploy

if [ $? -eq 0 ]; then
  echo "Migration completed successfully."
else
  echo "Migration failed. Exiting."
  exit 1
fi

# Start the Next.js application
echo "Starting Next.js application..."
npm run start
