-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "cnic" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_cnic_key" ON "PersonalInfo"("cnic");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_email_key" ON "PersonalInfo"("email");
