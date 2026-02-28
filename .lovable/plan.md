

# BIYU AI Agency – Application Dashboard

## Pages & Navigation
- **Landing Page** – Hero with branding, role description, and "Apply Now" CTA
- **Apply Page** – Full application form with validation and webhook submission
- **About Page** – Company info about BIYU AI Agency
- **FAQ Page** – Common questions about the application process
- Shared navbar and footer across all pages

## Landing Page
- Bold hero section with gradient background (blue/purple tech aesthetic)
- "Join Our Team as an AI Specialist" headline
- Role description and company highlights
- Animated "Apply Now" button linking to the form

## Application Form
- Fields: Full Name, Email, Phone, LinkedIn (optional), Resume upload (PDF/DOCX, max 5MB), Cover Letter (200-500 word validation), Years of AI Experience dropdown, Portfolio/GitHub (optional), "Why BIYU?" textarea
- Client-side validation with clear error messages
- On submit: POST JSON to the n8n webhook URL
- Success toast/message after submission

## About Page
- Company mission, values, and what BIYU AI Agency does
- Team culture and AI focus

## FAQ Page
- Accordion-style Q&A about timeline, process, requirements, etc.

## Design
- Professional blue/white color scheme with subtle gradients
- Clean typography, rounded cards, smooth hover/scroll animations
- Fully responsive mobile layout

