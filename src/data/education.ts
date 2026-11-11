import type { Education } from "@/types";

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International University of Business Agriculture and Technology",
    shortName: "IUBAT",
    period: "2024 – 2027",
    status: "Expected graduation 2027",
    courseProjects: [
      {
        name: "IoT-Based Fruit Detection System",
        summary:
          "Real-time fruit detection: an ESP32-CAM streams frames over Wi-Fi to a Python and OpenCV pipeline running a YOLO model.",
        repo: "https://github.com/Istiak0614/fruits-detection-esp32-yolov8",
      },
      {
        name: "School Management System",
        summary:
          "Custom Odoo 18 module with role-based access, attendance and marks tracking, notices, and PDF/Excel reports.",
        repo: "https://github.com/Istiak0614/school-management-system",
      },
    ],
  },
];
