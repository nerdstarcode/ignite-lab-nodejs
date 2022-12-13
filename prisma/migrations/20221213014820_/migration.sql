-- CreateTable
CREATE TABLE "Notifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipientId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readtedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "Notifications_recipientId_idx" ON "Notifications"("recipientId");
