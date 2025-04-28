import { useState, useEffect } from "react";

declare global {
  interface Window {
    processSelectedFile?: (fileUrl: string) => void;
  }
}

export const UseFileManager = (fileSelected: (fileUrl: string) => void) => {
    useEffect(() => {
        // Lắng nghe tin nhắn từ popup gửi về
        const receiveMessage = (event: any) => {
          // Kiểm tra origin để bảo mật
          if (event.origin !== "http://localhost:8000") return;
    
          const { fileUrl } = event.data;
          if (fileUrl) {
            fileSelected(fileUrl);
          }
        };
    
        window.addEventListener("message", receiveMessage);
    
        return () => {
          window.removeEventListener("message", receiveMessage);
        };
      }, []);
}

export const openFileManager = () => {
     window.open(
       "http://localhost:8000/file-manager/popup?",
       "FileManager",
       "width=900,height=600"
     );
}