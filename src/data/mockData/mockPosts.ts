import { mockImages } from './images';

export const mockPosts = [
  {
    id: 1,
    title: { 
      rendered: "Major Network Infrastructure Upgrade Scheduled for This Weekend" 
    },
    content: { 
      rendered: `
        <h2>Network Enhancement Project</h2>
        <p>We're excited to announce a comprehensive network infrastructure upgrade that will significantly improve connectivity and security across all our offices.</p>
        
        <h3>Key Improvements:</h3>
        <ul>
          <li><strong>Bandwidth Increase:</strong> Upgrading from 1Gbps to 10Gbps core switches</li>
          <li><strong>New Security Protocols:</strong> Implementing advanced threat detection systems</li>
          <li><strong>Wireless Enhancement:</strong> New Wi-Fi 6 access points in all common areas</li>
          <li><strong>Redundancy:</strong> Additional failover systems for critical services</li>
        </ul>

        <h3>Schedule & Impact:</h3>
        <p><strong>Date:</strong> Saturday, March 15th, 2024<br>
        <strong>Time:</strong> 10:00 PM - 6:00 AM (Sunday)<br>
        <strong>Expected Downtime:</strong> 4-6 hours for various services</p>

        <h3>Services Affected:</h3>
        <ul>
          <li>Internal file shares (brief interruptions)</li>
          <li>VPN connections (30-minute maintenance window)</li>
          <li>VoIP phone system (15-minute outage)</li>
        </ul>

        <p>Our team will be monitoring the upgrade throughout the process. For urgent matters during the maintenance window, please contact the emergency support line at ext. 911.</p>
      `
    },
    excerpt: { 
      rendered: "Comprehensive network upgrade including bandwidth enhancement, security improvements, and new Wi-Fi 6 deployment across all offices." 
    },
    date: "2024-03-10T09:00:00",
    modified: "2024-03-10T09:00:00",
    slug: "network-infrastructure-upgrade-march-2024",
    author: 1,
    categories: [1, 2],
    featured_media: 0,
    tags: [1, 2, 3],
    acf: {
      featured_image: mockImages.networkSetup,
      read_time: "4 min read",
      is_featured: true,
      is_breaking: true,
      views: 1247,
      likes: 89
    }
  },
  {
    id: 2,
    title: { 
      rendered: "New Multi-Factor Authentication (MFA) Implementation Starting Next Week" 
    },
    content: { 
      rendered: `
        <h2>Enhanced Security with MFA</h2>
        <p>To strengthen our security posture and protect sensitive company data, we're implementing mandatory Multi-Factor Authentication (MFA) for all employees.</p>
        
        <h3>Implementation Timeline:</h3>
        <table style="width:100%; border-collapse: collapse;">
          <tr style="background-color: #f8f9fa;">
            <th style="padding: 12px; border: 1px solid #ddd;">Phase</th>
            <th style="padding: 12px; border: 1px solid #ddd;">Department</th>
            <th style="padding: 12px; border: 1px solid #ddd;">Start Date</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;">1</td>
            <td style="padding: 12px; border: 1px solid #ddd;">IT & Finance</td>
            <td style="padding: 12px; border: 1px solid #ddd;">March 18</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;">2</td>
            <td style="padding: 12px; border: 1px solid #ddd;">HR & Legal</td>
            <td style="padding: 12px; border: 1px solid #ddd;">March 25</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;">3</td>
            <td style="padding: 12px; border: 1px solid #ddd;">All Other Departments</td>
            <td style="padding: 12px; border: 1px solid #ddd;">April 1</td>
          </tr>
        </table>

        <h3>Setup Instructions:</h3>
        <ol>
          <li>Download the Microsoft Authenticator app from your device's app store</li>
          <li>Visit our MFA setup portal</li>
          <li>Follow the on-screen instructions to register your device</li>
          <li>Test your login with the new MFA process</li>
        </ol>
      `
    },
    excerpt: { 
      rendered: "Mandatory Multi-Factor Authentication rollout begins next week with phased implementation across all departments." 
    },
    date: "2024-03-08T14:30:00",
    modified: "2024-03-08T14:30:00",
    slug: "mfa-implementation-march-2024",
    author: 2,
    categories: [2, 5],
    featured_media: 0,
    tags: [4, 5],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "5 min read",
      is_featured: true,
      is_breaking: false,
      views: 892,
      likes: 67
    }
  },
  {
    id: 3,
    title: { 
      rendered: "Microsoft Azure Migration: Phase 2 Completion & Next Steps" 
    },
    content: { 
      rendered: `
        <h2>Cloud Migration Milestone Achieved</h2>
        <p>We're pleased to announce the successful completion of Phase 2 in our Microsoft Azure migration project.</p>
        
        <h3>Phase 2 Accomplishments:</h3>
        <ul>
          <li><strong>Application Migration:</strong> 45+ business applications successfully migrated</li>
          <li><strong>Data Transfer:</strong> 12TB of company data securely moved to Azure Blob Storage</li>
          <li><strong>Performance:</strong> 40% improvement in application response times</li>
          <li><strong>Cost Savings:</strong> Projected 35% reduction in infrastructure costs</li>
        </ul>

        <h3>What's Next - Phase 3 (Q2 2024):</h3>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin-top: 0;">Upcoming Migrations:</h4>
          <ul>
            <li>CRM System to Azure SQL Database</li>
            <li>Legacy HR Systems to Azure Virtual Machines</li>
            <li>File Shares to Azure Files</li>
            <li>Disaster Recovery setup with Azure Site Recovery</li>
          </ul>
        </div>
      `
    },
    excerpt: { 
      rendered: "Phase 2 of Azure migration successfully completed with 45+ applications migrated and 40% performance improvement." 
    },
    date: "2024-03-05T11:15:00",
    modified: "2024-03-05T11:15:00",
    slug: "azure-migration-phase-2-completion",
    author: 3,
    categories: [4, 7],
    featured_media: 0,
    tags: [6, 7],
    acf: {
      featured_image: mockImages.cloudComputing,
      read_time: "6 min read",
      is_featured: true,
      is_breaking: false,
      views: 756,
      likes: 54
    }
  },
  {
    id: 4,
    title: { 
      rendered: "New AI-Powered Helpdesk Assistant Launching Next Month" 
    },
    content: { 
      rendered: `
        <h2>Revolutionizing IT Support with AI</h2>
        <p>We're excited to introduce "IT Helper AI" - our new artificial intelligence-powered helpdesk assistant.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li><strong>24/7 Instant Support:</strong> Get answers to common IT questions anytime</li>
          <li><strong>Ticket Automation:</strong> Automatically categorize and route support tickets</li>
          <li><strong>Self-Service Solutions:</strong> Step-by-step guides for common issues</li>
          <li><strong>Smart Escalation:</strong> Intelligent routing to the right specialist</li>
        </ul>

        <h3>Expected Benefits:</h3>
        <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #3B82F6; color: white;">
            <th style="padding: 12px; text-align: left;">Metric</th>
            <th style="padding: 12px; text-align: left;">Current</th>
            <th style="padding: 12px; text-align: left;">Expected</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;">First Response Time</td>
            <td style="padding: 12px; border: 1px solid #ddd;">4 hours</td>
            <td style="padding: 12px; border: 1px solid #ddd;">5 minutes</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;">Resolution Rate</td>
            <td style="padding: 12px; border: 1px solid #ddd;">65%</td>
            <td style="padding: 12px; border: 1px solid #ddd;">85%</td>
          </tr>
        </table>
      `
    },
    excerpt: { 
      rendered: "Introducing IT Helper AI - our new artificial intelligence assistant that provides 24/7 instant IT support." 
    },
    date: "2024-03-03T16:45:00",
    modified: "2024-03-03T16:45:00",
    slug: "ai-helpdesk-assistant-launch",
    author: 4,
    categories: [5, 6],
    featured_media: 0,
    tags: [8, 9],
    acf: {
      featured_image: mockImages.aiMl,
      read_time: "7 min read",
      is_featured: true,
      is_breaking: false,
      views: 1103,
      likes: 92
    }
  },
  {
    id: 5,
    title: { 
      rendered: "Annual IT Security Awareness Training: Mandatory Completion Required" 
    },
    content: { 
      rendered: `
        <h2>Security Training Update</h2>
        <p>All employees must complete the updated security awareness training by April 30th to maintain system access privileges.</p>
        
        <h3>New Training Modules:</h3>
        <ul>
          <li>Advanced Phishing Detection</li>
          <li>Data Protection Best Practices</li>
          <li>Remote Work Security</li>
          <li>Social Engineering Awareness</li>
        </ul>

        <p><strong>Deadline:</strong> April 30th, 2024<br>
        <strong>Access:</strong> Available through the employee portal<br>
        <strong>Duration:</strong> Approximately 45 minutes</p>
      `
    },
    excerpt: { 
      rendered: "All employees must complete the updated security awareness training by April 30th to maintain system access privileges." 
    },
    date: "2024-02-28T10:00:00",
    modified: "2024-02-28T10:00:00",
    slug: "security-awareness-training-2024",
    author: 2,
    categories: [2, 10],
    featured_media: 0,
    tags: [10, 11],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "3 min read",
      is_featured: false,
      is_breaking: false,
      views: 543,
      likes: 23
    }
  },
  {
    id: 6,
    title: { 
      rendered: "New Software Development Framework Adoption: React & Node.js" 
    },
    content: { 
      rendered: `
        <h2>Development Standardization</h2>
        <p>We're standardizing on React for frontend and Node.js for backend development to improve consistency and developer productivity.</p>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Faster development cycles</li>
          <li>Better code maintainability</li>
          <li>Enhanced collaboration</li>
          <li>Rich ecosystem of libraries</li>
        </ul>

        <h3>Training Schedule:</h3>
        <p>Comprehensive training sessions will be provided throughout March and April.</p>
      `
    },
    excerpt: { 
      rendered: "Standardizing on React for frontend and Node.js for backend development to improve consistency and developer productivity." 
    },
    date: "2024-02-25T14:20:00",
    modified: "2024-02-25T14:20:00",
    slug: "new-dev-framework-react-nodejs",
    author: 4,
    categories: [3],
    featured_media: 0,
    tags: [12, 13],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "5 min read",
      is_featured: false,
      is_breaking: false,
      views: 678,
      likes: 45
    }
  },
  {
    id: 7,
    title: { 
      rendered: "Company-Wide Laptop Refresh Program Announcement" 
    },
    content: { 
      rendered: `
        <h2>Hardware Upgrade Initiative</h2>
        <p>We're launching a comprehensive laptop refresh program to ensure all employees have modern, secure, and efficient devices.</p>
        
        <h3>New Device Specifications:</h3>
        <ul>
          <li>Dell Latitude 7440 / MacBook Pro 14"</li>
          <li>16GB RAM, 512GB SSD</li>
          <li>Enhanced security features</li>
          <li>5-year warranty</li>
        </ul>

        <h3>Rollout Schedule:</h3>
        <p>Department-by-department rollout starting in April. IT will contact you for scheduling.</p>
      `
    },
    excerpt: { 
      rendered: "Comprehensive laptop refresh program launching with new Dell Latitude and MacBook Pro devices for all employees." 
    },
    date: "2024-02-20T09:30:00",
    modified: "2024-02-20T09:30:00",
    slug: "laptop-refresh-program-2024",
    author: 5,
    categories: [8],
    featured_media: 0,
    tags: [14, 15],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "4 min read",
      is_featured: true,
      is_breaking: false,
      views: 892,
      likes: 78
    }
  },
  {
    id: 8,
    title: { 
      rendered: "New Data Analytics Platform: Power BI Enterprise Deployment" 
    },
    content: { 
      rendered: `
        <h2>Business Intelligence Upgrade</h2>
        <p>We're deploying Microsoft Power BI Enterprise to provide enhanced data analytics capabilities across the organization.</p>
        
        <h3>Features:</h3>
        <ul>
          <li>Real-time dashboards</li>
          <li>Advanced data visualization</li>
          <li>Collaborative reporting</li>
          <li>Mobile access</li>
        </ul>

        <h3>Training Available:</h3>
        <p>Weekly workshops starting March 1st. Register through the learning portal.</p>
      `
    },
    excerpt: { 
      rendered: "Microsoft Power BI Enterprise deployment to provide enhanced data analytics and visualization capabilities." 
    },
    date: "2024-02-18T13:45:00",
    modified: "2024-02-18T13:45:00",
    slug: "power-bi-enterprise-deployment",
    author: 8,
    categories: [9],
    featured_media: 0,
    tags: [16, 17],
    acf: {
      featured_image: mockImages.digitalTransformation,
      read_time: "4 min read",
      is_featured: false,
      is_breaking: false,
      views: 567,
      likes: 34
    }
  },
  {
    id: 9,
    title: { 
      rendered: "Emergency Security Patch: Critical Vulnerability Update Required" 
    },
    content: { 
      rendered: `
        <h2>Critical Security Update</h2>
        <p>We've identified a critical security vulnerability affecting multiple systems. Immediate patching is required.</p>
        
        <h3>Actions Required:</h3>
        <ul>
          <li>Restart your computer by end of day</li>
          <li>Ensure all updates are installed</li>
          <li>Report any unusual system behavior</li>
        </ul>

        <p><strong>Impact:</strong> High<br>
        <strong>Priority:</strong> Critical<br>
        <strong>Deadline:</strong> Today, 6:00 PM</p>
      `
    },
    excerpt: { 
      rendered: "Critical security vulnerability identified. Immediate system patching required for all company devices." 
    },
    date: "2024-02-15T08:00:00",
    modified: "2024-02-15T08:00:00",
    slug: "emergency-security-patch-february",
    author: 2,
    categories: [2],
    featured_media: 0,
    tags: [18, 19],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "2 min read",
      is_featured: false,
      is_breaking: true,
      views: 1345,
      likes: 12
    }
  },
  {
    id: 10,
    title: { 
      rendered: "IT Department Expansion: Welcome Our New Team Members" 
    },
    content: { 
      rendered: `
        <h2>Team Growth Announcement</h2>
        <p>We're excited to welcome 5 new members to our IT department to support our growing technology initiatives.</p>
        
        <h3>New Roles:</h3>
        <ul>
          <li>2 Cloud Engineers</li>
          <li>1 Security Analyst</li>
          <li>1 Data Scientist</li>
          <li>1 UX/UI Designer</li>
        </ul>

        <p>Please join us in welcoming our new colleagues during the team introduction session this Friday.</p>
      `
    },
    excerpt: { 
      rendered: "Welcoming 5 new team members to the IT department to support cloud, security, data, and UX initiatives." 
    },
    date: "2024-02-12T11:20:00",
    modified: "2024-02-12T11:20:00",
    slug: "it-department-expansion-new-hires",
    author: 1,
    categories: [7],
    featured_media: 0,
    tags: [20, 21],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "3 min read",
      is_featured: false,
      is_breaking: false,
      views: 456,
      likes: 67
    }
  },
  // Continuing with posts 11-50...
  {
    id: 11,
    title: { 
      rendered: "VPN Service Upgrade: Enhanced Performance and Security" 
    },
    excerpt: { 
      rendered: "Upgrading our VPN infrastructure to provide faster connections and enhanced security features for remote workers." 
    },
    date: "2024-02-10T14:15:00",
    modified: "2024-02-10T14:15:00",
    slug: "vpn-service-upgrade-february",
    author: 5,
    categories: [1, 2],
    acf: {
      featured_image: mockImages.networkSetup,
      read_time: "3 min read",
      is_featured: false,
      views: 389,
      likes: 23
    }
  },
  {
    id: 12,
    title: { 
      rendered: "New Code Repository: GitLab Enterprise Implementation" 
    },
    excerpt: { 
      rendered: "Migrating from GitHub to GitLab Enterprise for better DevOps integration and enhanced security features." 
    },
    date: "2024-02-08T10:30:00",
    modified: "2024-02-08T10:30:00",
    slug: "gitlab-enterprise-implementation",
    author: 4,
    categories: [3],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "4 min read",
      is_featured: false,
      views: 512,
      likes: 45
    }
  },
  {
    id: 13,
    title: { 
      rendered: "Quarterly IT Town Hall: Recording Available" 
    },
    excerpt: { 
      rendered: "Recording and slides from our Q1 IT Town Hall are now available for those who couldn't attend the live session." 
    },
    date: "2024-02-05T16:45:00",
    modified: "2024-02-05T16:45:00",
    slug: "q1-it-town-hall-recording",
    author: 1,
    categories: [7],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "2 min read",
      is_featured: false,
      views: 678,
      likes: 34
    }
  },
  {
    id: 14,
    title: { 
      rendered: "New Mobile Device Management Policy Effective Immediately" 
    },
    excerpt: { 
      rendered: "Updated MDM policy to enhance security for company-owned and BYOD mobile devices." 
    },
    date: "2024-02-03T09:15:00",
    modified: "2024-02-03T09:15:00",
    slug: "mobile-device-management-policy-update",
    author: 2,
    categories: [2, 8, 10],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "5 min read",
      is_featured: false,
      views: 423,
      likes: 18
    }
  },
  {
    id: 15,
    title: { 
      rendered: "AWS Cost Optimization Initiative: 30% Savings Achieved" 
    },
    excerpt: { 
      rendered: "Successfully optimized AWS infrastructure resulting in 30% cost reduction while maintaining performance." 
    },
    date: "2024-02-01T13:20:00",
    modified: "2024-02-01T13:20:00",
    slug: "aws-cost-optimization-success",
    author: 3,
    categories: [4, 9],
    acf: {
      featured_image: mockImages.cloudComputing,
      read_time: "4 min read",
      is_featured: true,
      views: 589,
      likes: 56
    }
  },
  {
    id: 16,
    title: { 
      rendered: "Python Development Standards and Best Practices Guide" 
    },
    excerpt: { 
      rendered: "New comprehensive guide for Python development standards to ensure code quality and consistency." 
    },
    date: "2024-01-29T11:30:00",
    modified: "2024-01-29T11:30:00",
    slug: "python-development-standards-guide",
    author: 4,
    categories: [3, 10],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "6 min read",
      is_featured: false,
      views: 734,
      likes: 67
    }
  },
  {
    id: 17,
    title: { 
      rendered: "IT Helpdesk Satisfaction Survey Results: 94% Positive Feedback" 
    },
    excerpt: { 
      rendered: "Recent helpdesk satisfaction survey shows 94% positive feedback with continued improvements planned." 
    },
    date: "2024-01-27T15:40:00",
    modified: "2024-01-27T15:40:00",
    slug: "helpdesk-satisfaction-survey-results",
    author: 7,
    categories: [5],
    acf: {
      featured_image: mockImages.helpdesk,
      read_time: "3 min read",
      is_featured: false,
      views: 345,
      likes: 45
    }
  },
  {
    id: 18,
    title: { 
      rendered: "Machine Learning Model for Predictive Maintenance Goes Live" 
    },
    excerpt: { 
      rendered: "New ML model successfully deployed to predict hardware failures and schedule proactive maintenance." 
    },
    date: "2024-01-25T10:15:00",
    modified: "2024-01-25T10:15:00",
    slug: "ml-predictive-maintenance-launch",
    author: 6,
    categories: [6, 8],
    acf: {
      featured_image: mockImages.aiMl,
      read_time: "5 min read",
      is_featured: true,
      views: 812,
      likes: 78
    }
  },
  {
    id: 19,
    title: { 
      rendered: "Digital Workspace Transformation: Microsoft VDI Implementation" 
    },
    excerpt: { 
      rendered: "Implementing Microsoft Virtual Desktop Infrastructure to enable secure remote access to specialized applications." 
    },
    date: "2024-01-23T14:25:00",
    modified: "2024-01-23T14:25:00",
    slug: "microsoft-vdi-implementation",
    author: 3,
    categories: [4, 7],
    acf: {
      featured_image: mockImages.cloudComputing,
      read_time: "4 min read",
      is_featured: false,
      views: 467,
      likes: 32
    }
  },
  {
    id: 20,
    title: { 
      rendered: "Network Performance Monitoring: New Dashboard Available" 
    },
    excerpt: { 
      rendered: "Real-time network performance dashboard now available for technical teams to monitor infrastructure health." 
    },
    date: "2024-01-21T09:50:00",
    modified: "2024-01-21T09:50:00",
    slug: "network-performance-dashboard-launch",
    author: 5,
    categories: [1, 9],
    acf: {
      featured_image: mockImages.networkSetup,
      read_time: "3 min read",
      is_featured: false,
      views: 389,
      likes: 29
    }
  },
  // Posts 21-30
  {
    id: 21,
    title: { 
      rendered: "Containerization Initiative: Docker and Kubernetes Training" 
    },
    excerpt: { 
      rendered: "Comprehensive containerization training program for development teams starting next month." 
    },
    date: "2024-01-19T13:15:00",
    modified: "2024-01-19T13:15:00",
    slug: "containerization-training-program",
    author: 4,
    categories: [3, 4],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "4 min read",
      is_featured: false,
      views: 523,
      likes: 41
    }
  },
  {
    id: 22,
    title: { 
      rendered: "Cybersecurity Incident Response Drill Scheduled" 
    },
    excerpt: { 
      rendered: "Quarterly cybersecurity incident response drill to test our preparedness and response capabilities." 
    },
    date: "2024-01-17T11:20:00",
    modified: "2024-01-17T11:20:00",
    slug: "cybersecurity-incident-response-drill",
    author: 2,
    categories: [2],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "3 min read",
      is_featured: false,
      views: 412,
      likes: 19
    }
  },
  {
    id: 23,
    title: { 
      rendered: "Data Backup and Recovery System Enhancement" 
    },
    excerpt: { 
      rendered: "Upgrading our backup and recovery systems to reduce RTO and RPO for critical business systems." 
    },
    date: "2024-01-15T15:30:00",
    modified: "2024-01-15T15:30:00",
    slug: "backup-recovery-system-upgrade",
    author: 3,
    categories: [4, 2],
    acf: {
      featured_image: mockImages.cloudComputing,
      read_time: "5 min read",
      is_featured: false,
      views: 478,
      likes: 36
    }
  },
  {
    id: 24,
    title: { 
      rendered: "IT Procurement Process Optimization" 
    },
    excerpt: { 
      rendered: "Streamlined IT procurement process reducing approval times from 5 days to 24 hours." 
    },
    date: "2024-01-13T10:45:00",
    modified: "2024-01-13T10:45:00",
    slug: "it-procurement-process-optimization",
    author: 1,
    categories: [8, 7],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "4 min read",
      is_featured: false,
      views: 345,
      likes: 28
    }
  },
  {
    id: 25,
    title: { 
      rendered: "New API Gateway Implementation for Microservices" 
    },
    excerpt: { 
      rendered: "Implementing Kong API Gateway to manage and secure our growing microservices architecture." 
    },
    date: "2024-01-11T14:20:00",
    modified: "2024-01-11T14:20:00",
    slug: "api-gateway-implementation",
    author: 4,
    categories: [3, 4],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "5 min read",
      is_featured: true,
      views: 623,
      likes: 52
    }
  },
  {
    id: 26,
    title: { 
      rendered: "Zero Trust Security Architecture Implementation Phase 1" 
    },
    excerpt: { 
      rendered: "Beginning implementation of Zero Trust security architecture to enhance our security posture." 
    },
    date: "2024-01-09T09:15:00",
    modified: "2024-01-09T09:15:00",
    slug: "zero-trust-security-implementation",
    author: 2,
    categories: [2],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "6 min read",
      is_featured: false,
      views: 567,
      likes: 44
    }
  },
  {
    id: 27,
    title: { 
      rendered: "IT Service Management Platform Upgrade" 
    },
    excerpt: { 
      rendered: "Upgrading ServiceNow to the latest version with enhanced automation and reporting capabilities." 
    },
    date: "2024-01-07T13:40:00",
    modified: "2024-01-07T13:40:00",
    slug: "servicenow-platform-upgrade",
    author: 7,
    categories: [5, 7],
    acf: {
      featured_image: mockImages.helpdesk,
      read_time: "4 min read",
      is_featured: false,
      views: 389,
      likes: 31
    }
  },
  {
    id: 28,
    title: { 
      rendered: "Data Lake Implementation for Advanced Analytics" 
    },
    excerpt: { 
      rendered: "Building enterprise data lake on Azure to consolidate data sources and enable advanced analytics." 
    },
    date: "2024-01-05T11:25:00",
    modified: "2024-01-05T11:25:00",
    slug: "data-lake-implementation-azure",
    author: 8,
    categories: [9, 4],
    acf: {
      featured_image: mockImages.digitalTransformation,
      read_time: "5 min read",
      is_featured: false,
      views: 512,
      likes: 47
    }
  },
  {
    id: 29,
    title: { 
      rendered: "Developer Productivity Tools Survey Results" 
    },
    excerpt: { 
      rendered: "Results from developer productivity tools survey guiding our investments in development infrastructure." 
    },
    date: "2024-01-03T16:10:00",
    modified: "2024-01-03T16:10:00",
    slug: "developer-productivity-tools-survey",
    author: 4,
    categories: [3],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "3 min read",
      is_featured: false,
      views: 423,
      likes: 38
    }
  },
  {
    id: 30,
    title: { 
      rendered: "Annual IT Budget Planning: Key Initiatives for 2024" 
    },
    excerpt: { 
      rendered: "Overview of major IT initiatives and budget allocations for the upcoming fiscal year." 
    },
    date: "2024-01-02T10:00:00",
    modified: "2024-01-02T10:00:00",
    slug: "it-budget-planning-2024",
    author: 1,
    categories: [7],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "7 min read",
      is_featured: true,
      views: 891,
      likes: 63
    }
  },
  // Posts 31-40
  {
    id: 31,
    title: { 
      rendered: "Network Segmentation Project: Enhancing Security" 
    },
    excerpt: { 
      rendered: "Implementing network segmentation to isolate critical systems and reduce attack surface." 
    },
    date: "2023-12-28T14:30:00",
    modified: "2023-12-28T14:30:00",
    slug: "network-segmentation-project",
    author: 5,
    categories: [1, 2],
    acf: {
      featured_image: mockImages.networkSetup,
      read_time: "4 min read",
      is_featured: false,
      views: 467,
      likes: 35
    }
  },
  {
    id: 32,
    title: { 
      rendered: "CI/CD Pipeline Optimization Results" 
    },
    excerpt: { 
      rendered: "Continuous integration pipeline optimizations reducing build times by 60%." 
    },
    date: "2023-12-26T11:45:00",
    modified: "2023-12-26T11:45:00",
    slug: "cicd-pipeline-optimization",
    author: 4,
    categories: [3],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "4 min read",
      is_featured: false,
      views: 534,
      likes: 49
    }
  },
  {
    id: 33,
    title: { 
      rendered: "Cloud Cost Management Best Practices" 
    },
    excerpt: { 
      rendered: "New guidelines and tools for managing and optimizing cloud spending across departments." 
    },
    date: "2023-12-24T09:20:00",
    modified: "2023-12-24T09:20:00",
    slug: "cloud-cost-management-guide",
    author: 3,
    categories: [4, 10],
    acf: {
      featured_image: mockImages.cloudComputing,
      read_time: "5 min read",
      is_featured: false,
      views: 589,
      likes: 52
    }
  },
  {
    id: 34,
    title: { 
      rendered: "IT Helpdesk Knowledge Base Expansion" 
    },
    excerpt: { 
      rendered: "Expanding self-service knowledge base with 200+ new articles and troubleshooting guides." 
    },
    date: "2023-12-22T13:15:00",
    modified: "2023-12-22T13:15:00",
    slug: "helpdesk-knowledge-base-expansion",
    author: 7,
    categories: [5],
    acf: {
      featured_image: mockImages.helpdesk,
      read_time: "3 min read",
      is_featured: false,
      views: 378,
      likes: 41
    }
  },
  {
    id: 35,
    title: { 
      rendered: "Natural Language Processing for Document Analysis" 
    },
    excerpt: { 
      rendered: "Implementing NLP capabilities to automate document analysis and information extraction." 
    },
    date: "2023-12-20T15:40:00",
    modified: "2023-12-20T15:40:00",
    slug: "nlp-document-analysis-implementation",
    author: 6,
    categories: [6, 9],
    acf: {
      featured_image: mockImages.aiMl,
      read_time: "5 min read",
      is_featured: true,
      views: 712,
      likes: 68
    }
  },
  {
    id: 36,
    title: { 
      rendered: "Digital Employee Experience Platform Launch" 
    },
    excerpt: { 
      rendered: "New digital platform to enhance employee onboarding, training, and engagement." 
    },
    date: "2023-12-18T10:25:00",
    modified: "2023-12-18T10:25:00",
    slug: "digital-employee-experience-platform",
    author: 1,
    categories: [7],
    acf: {
      featured_image: mockImages.digitalTransformation,
      read_time: "4 min read",
      is_featured: false,
      views: 456,
      likes: 39
    }
  },
  {
    id: 37,
    title: { 
      rendered: "Endpoint Detection and Response System Deployment" 
    },
    excerpt: { 
      rendered: "Deploying advanced EDR solution to enhance threat detection and response on endpoints." 
    },
    date: "2023-12-16T14:50:00",
    modified: "2023-12-16T14:50:00",
    slug: "edr-system-deployment",
    author: 2,
    categories: [2, 8],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "4 min read",
      is_featured: false,
      views: 498,
      likes: 33
    }
  },
  {
    id: 38,
    title: { 
      rendered: "Database Performance Optimization Complete" 
    },
    excerpt: { 
      rendered: "Major database optimization project completed, improving query performance by 75%." 
    },
    date: "2023-12-14T11:35:00",
    modified: "2023-12-14T11:35:00",
    slug: "database-performance-optimization",
    author: 3,
    categories: [4, 9],
    acf: {
      featured_image: mockImages.cloudComputing,
      read_time: "5 min read",
      is_featured: false,
      views: 523,
      likes: 46
    }
  },
  {
    id: 39,
    title: { 
      rendered: "IT Governance Framework Update" 
    },
    excerpt: { 
      rendered: "Updated IT governance framework to align with industry best practices and compliance requirements." 
    },
    date: "2023-12-12T09:10:00",
    modified: "2023-12-12T09:10:00",
    slug: "it-governance-framework-update",
    author: 1,
    categories: [10],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "6 min read",
      is_featured: false,
      views: 389,
      likes: 27
    }
  },
  {
    id: 40,
    title: { 
      rendered: "Annual IT Infrastructure Review Results" 
    },
    excerpt: { 
      rendered: "Comprehensive review of IT infrastructure identifying areas for improvement and optimization." 
    },
    date: "2023-12-10T16:20:00",
    modified: "2023-12-10T16:20:00",
    slug: "annual-it-infrastructure-review",
    author: 5,
    categories: [1, 4, 8],
    acf: {
      featured_image: mockImages.networkSetup,
      read_time: "7 min read",
      is_featured: true,
      views: 645,
      likes: 58
    }
  },
  // Posts 41-50
  {
    id: 41,
    title: { 
      rendered: "Software License Optimization Savings" 
    },
    excerpt: { 
      rendered: "Software license optimization initiative results in 25% cost savings while maintaining functionality." 
    },
    date: "2023-12-08T13:45:00",
    modified: "2023-12-08T13:45:00",
    slug: "software-license-optimization",
    author: 7,
    categories: [8, 10],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "4 min read",
      is_featured: false,
      views: 412,
      likes: 36
    }
  },
  {
    id: 42,
    title: { 
      rendered: "Mobile Application Development Framework Selection" 
    },
    excerpt: { 
      rendered: "Selecting React Native as standard framework for company mobile application development." 
    },
    date: "2023-12-06T10:30:00",
    modified: "2023-12-06T10:30:00",
    slug: "mobile-app-framework-selection",
    author: 4,
    categories: [3],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "4 min read",
      is_featured: false,
      views: 478,
      likes: 42
    }
  },
  {
    id: 43,
    title: { 
      rendered: "Disaster Recovery Test Successfully Completed" 
    },
    excerpt: { 
      rendered: "Annual disaster recovery test validates our ability to restore critical systems within 4 hours." 
    },
    date: "2023-12-04T15:15:00",
    modified: "2023-12-04T15:15:00",
    slug: "disaster-recovery-test-completed",
    author: 3,
    categories: [4, 2],
    acf: {
      featured_image: mockImages.cloudComputing,
      read_time: "3 min read",
      is_featured: false,
      views: 356,
      likes: 29
    }
  },
  {
    id: 44,
    title: { 
      rendered: "IT Service Catalog Enhancement" 
    },
    excerpt: { 
      rendered: "Enhanced IT service catalog with improved categorization and service level descriptions." 
    },
    date: "2023-12-02T11:50:00",
    modified: "2023-12-02T11:50:00",
    slug: "it-service-catalog-enhancement",
    author: 7,
    categories: [5, 7],
    acf: {
      featured_image: mockImages.helpdesk,
      read_time: "4 min read",
      is_featured: false,
      views: 334,
      likes: 31
    }
  },
  {
    id: 45,
    title: { 
      rendered: "Predictive Analytics for IT Operations" 
    },
    excerpt: { 
      rendered: "Implementing predictive analytics to anticipate and prevent IT infrastructure issues." 
    },
    date: "2023-11-30T14:25:00",
    modified: "2023-11-30T14:25:00",
    slug: "predictive-analytics-it-operations",
    author: 6,
    categories: [6, 9],
    acf: {
      featured_image: mockImages.aiMl,
      read_time: "5 min read",
      is_featured: true,
      views: 689,
      likes: 61
    }
  },
  {
    id: 46,
    title: { 
      rendered: "Wireless Network Capacity Expansion" 
    },
    excerpt: { 
      rendered: "Expanding wireless network capacity in high-density areas to support increased device usage." 
    },
    date: "2023-11-28T09:40:00",
    modified: "2023-11-28T09:40:00",
    slug: "wireless-network-capacity-expansion",
    author: 5,
    categories: [1],
    acf: {
      featured_image: mockImages.networkSetup,
      read_time: "3 min read",
      is_featured: false,
      views: 423,
      likes: 34
    }
  },
  {
    id: 47,
    title: { 
      rendered: "Development Environment Standardization" 
    },
    excerpt: { 
      rendered: "Standardizing development environments using Docker containers for consistency and reproducibility." 
    },
    date: "2023-11-26T13:20:00",
    modified: "2023-11-26T13:20:00",
    slug: "development-environment-standardization",
    author: 4,
    categories: [3],
    acf: {
      featured_image: mockImages.softwareDev,
      read_time: "4 min read",
      is_featured: false,
      views: 512,
      likes: 47
    }
  },
  {
    id: 48,
    title: { 
      rendered: "Cloud Security Posture Management Implementation" 
    },
    excerpt: { 
      rendered: "Implementing CSPM tool to continuously monitor and improve our cloud security posture." 
    },
    date: "2023-11-24T16:05:00",
    modified: "2023-11-24T16:05:00",
    slug: "cloud-security-posture-management",
    author: 2,
    categories: [2, 4],
    acf: {
      featured_image: mockImages.cybersecurity,
      read_time: "5 min read",
      is_featured: false,
      views: 467,
      likes: 39
    }
  },
  {
    id: 49,
    title: { 
      rendered: "IT Asset Management System Upgrade" 
    },
    excerpt: { 
      rendered: "Upgrading IT asset management system to improve tracking and lifecycle management." 
    },
    date: "2023-11-22T10:55:00",
    modified: "2023-11-22T10:55:00",
    slug: "it-asset-management-upgrade",
    author: 7,
    categories: [8],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "4 min read",
      is_featured: false,
      views: 378,
      likes: 32
    }
  },
  {
    id: 50,
    title: { 
      rendered: "Year-End IT Achievements and Recognition" 
    },
    excerpt: { 
      rendered: "Celebrating major IT achievements from the past year and recognizing outstanding team contributions." 
    },
    date: "2023-11-20T14:30:00",
    modified: "2023-11-20T14:30:00",
    slug: "year-end-it-achievements",
    author: 1,
    categories: [7],
    acf: {
      featured_image: mockImages.itDepartment,
      read_time: "6 min read",
      is_featured: true,
      views: 723,
      likes: 89
    }
  }
];