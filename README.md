# AutoMark-CS-Project-site

AutoMark – Smart Grading Assistant
AutoMark is a mobile application designed to help Educators (Teachers and Lecturers) automatically mark student exam scripts and assign grades with the assistance of AI and OCR (Optical Character Recognition) and also generate a pdf for the reuslts.

The app simplifies the grading process by offering two main options:

Auto-Marking (Keyword Matching & Logic-based Grading)
AI Marking (Contextual Feedback & Scoring using AI)
AutoMark allows users to scan or upload exam scripts, extract answers, compare them with a preloaded answer key, and generate grades automatically. It also provides options for manual override, result storage, and report generation.

Mobile App Features
Key Screens & Functionalities
HomeScreen - Central Hub with navigation cards to access certain screens like screens for unmarked scripts
Upload Script Screen - Upload student exam script currently as images(either using a phone camera or directly from the gallery), file uploads planned in future versions.
Unmarked Scripts Screen - View all uploaded scripts awaiting marking. Each script is shown as a card.
AnswerKey Screen(Marking-guides) - Perform actual Marking. Choose between Auto-Marking or AI-Based Marking.
Marked Scripts Screen - View all marked scripts along with feedback(ai), score and also method used for marking
Results Screen - Displays the student names(or numbers) with their scores in percentage form , includes an option to generate a PDF report for subject.
Payments Screen(Planned) - integration with MTN Mobile Money API to unlock premium features like bulk grading, analytics or advanced reporting.

Technologies Used
Flutter(Dart) - Cross platform mobile app development Google ML kit - OCR text Extraction RESTFUL API - Backend communication MTN Mobile Money API - In-app payments for premium features Github Pages - Website hosting HTML/CSS - Static website Frontend

Backend & API Integration
MTN Mobile Money API (Planned)
AutoMark will integrate the MTN Mobile Money Open API to handle secure payments. Users will be able to:

Unlock bulk marking features
Access downloadable student reports
Enable long-term script storage or print services
Getting Started (Developers)
1 Clone the Repository
git clone https://github.com/Lyazi-Patrick/AutoMark-CS-Project
2 Prerequisites
Flutter SDK - ver 3.10.00 Dart - ver 3.0 Android Studio/Vscode - For device emulation or APK building MTN Developer Account - For MOMO API keys Google ML kit API key - for OCR

3 Running the Mobile App
cd mobile
flutter pub get
flutter run
Ensure your device or emulator is connected.

4 API Setup
If using the backend:

Implement REST API endpoints as shown above
Configure .env or secure storage for API keys (MTN MoMo, Google ML Kit, and AI key)
