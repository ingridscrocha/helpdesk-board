export async function GET() {
  const tickets = [
    { id: 't-1001', title: 'Cannot connect to VPN', description: 'User reports intermittent VPN connectivity errors.', priority: 'High', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-04T12:49:00Z' },
    { id: 't-1002', title: 'Email not syncing on mobile', description: 'Exchange account not syncing for iOS Mail.', priority: 'Medium', status: 'In Progress', assignee: 'Jordan', updatedAt: '2025-10-29T05:21:00Z' },
    { id: 't-1003', title: 'Laptop battery drains quickly', description: 'Battery drops from 100% to 20% in 2 hours.', priority: 'Low', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-22T12:30:00Z' },
    { id: 't-1004', title: 'Okta MFA prompts repeatedly', description: 'User receives MFA prompt every time they log in.', priority: 'High', status: 'On Hold', assignee: 'Alex', updatedAt: '2025-10-23T21:03:00Z' },
    { id: 't-1005', title: 'Printer not responding on Floor 3', description: 'Queue stuck and jobs time out.', priority: 'Medium', status: 'Open', assignee: 'Priya', updatedAt: '2025-10-25T07:00:00Z' },
    { id: 't-1006', title: 'Teams screen share fails', description: 'Sharing starts and immediately stops.', priority: 'High', status: 'Open', assignee: 'Sam', updatedAt: '2025-10-30T06:00:00Z' },
    { id: 't-1007', title: 'New hire account provisioning', description: 'Create baseline accounts and permissions.', priority: 'Critical', status: 'In Progress', assignee: 'Morgan', updatedAt: '2025-10-13T04:05:00Z' },
    { id: 't-1008', title: 'Wi-Fi drops in Conference Room A', description: 'Signal fluctuates during large meetings.', priority: 'Medium', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-28T08:10:00Z' },
    { id: 't-1009', title: 'Locked out of Salesforce', description: 'User cannot complete MFA push.', priority: 'High', status: 'Resolved', assignee: 'Sam', updatedAt: '2025-10-25T10:05:00Z' },
    { id: 't-1010', title: 'Zoom audio echoes', description: 'Echo reported by multiple attendees.', priority: 'Low', status: 'Open', assignee: 'Jordan', updatedAt: '2025-10-27T16:00:00Z' },
    { id: 't-1011', title: 'Shared drive permissions', description: 'Access denied for new project members.', priority: 'Medium', status: 'Open', assignee: 'Priya', updatedAt: '2025-10-28T14:50:00Z' },
    { id: 't-1012', title: 'Slack notifications delayed', description: 'Messages appear several minutes late.', priority: 'Low', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T05:55:00Z' },
    { id: 't-1013', title: 'macOS update fails to install', description: 'Installer stops at 75% and rolls back.', priority: 'High', status: 'In Progress', assignee: 'Alex', updatedAt: '2025-11-01T15:40:00Z' },
    { id: 't-1014', title: 'Jira automation not triggering', description: 'Transition rules not executing for new issues.', priority: 'Critical', status: 'On Hold', assignee: 'Morgan', updatedAt: '2025-11-02T18:25:00Z' },
  ];

  return Response.json(tickets);
}