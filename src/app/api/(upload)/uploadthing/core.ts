import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  poster: f({ image: { maxFileSize: "64MB", maxFileCount: 5 } }).onUploadComplete(() => {}),
  avatar: f({ image: { maxFileSize: "8MB", maxFileCount: 1 } }).onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
