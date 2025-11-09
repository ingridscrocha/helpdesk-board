# Helpdesk Ticket Board

A web application built with **Next.js** and **React** that displays IT support tickets from an API endpoint, allows users to filter, search, and manage their own “My Queue” of tickets.

---

## Setup Instructions

To run the project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000


Feature Checklist (Aligned with Rubric)
1. Data Loading

 - Loads all tickets from the /api/tickets endpoint on first visit

-  API route defined in src/app/api/tickets/route.js with export async function GET()

-  Displays "Loading..." during fetch and "Unable to load tickets." on error

2. Filtering and Search

- Status Filter: Dropdown filters by ticket status (Open, In Progress, On Hold, Resolved)

-  Priority Filter: Dropdown filters by priority level (Low, Medium, High, Critical)

-  Search Box: Filters tickets by keyword in title or description (case-insensitive)

-  Combined filtering logic (status + priority + keyword) updates dynamically

3. Queue Management

- Each ticket card includes an “Add to My Queue” button

-  Clicking adds the ticket to a local “My Queue” list

-  Button disables and displays “Already in Queue” message once added

-  My Queue Summary component shows all queued tickets with:

- Count of tickets

- Remove individual ticket

- Clear all queue items

4. Visual Feedback and UI States

-  “Loading…” message shown before data renders

-  “Unable to load tickets.” appears on API error

- “No tickets match your filters.” appears when no results found

 - Consistent dark theme using Tailwind CSS utility classes

5. Live Updates

-  Ticket data periodically simulates changes to status, priority, and updatedAt fields

 - Updates occur every 6–10 seconds using setTimeout

 - Component properly cleans up timer on unmount to prevent leaks

6. Code Organization

-  API route defined in src/app/api/tickets/route.js

-  Client components stored in src/app/components

-  Utilities (e.g., severity helpers) stored in src/app/lib

- Clean, readable component structure with props and state hooks

- Meets Next.js App Router conventions