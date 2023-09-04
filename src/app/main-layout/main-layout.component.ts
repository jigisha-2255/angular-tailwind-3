import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainLayoutService } from './main-layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  direction = 'ltr';
  constructor(public router:Router,public layoutService:MainLayoutService){
    // console.log(this.layoutService.darkMode);
  }
  ngOnInit(){
    console.log('oninit dark mode',localStorage.getItem('mode'));
    this.layoutService.darkMode=JSON.parse(localStorage.getItem('mode') || '{}');
    console.log('oninit layout',localStorage.getItem('direction'));
    this.layoutService.direction=localStorage.getItem('direction');
    console.log('oninit sidebar',localStorage.getItem('sidebar'));
    this.layoutService.openSidebar=JSON.parse(localStorage.getItem('sidebar') || '{}');
  }

  checkSidebar(status:any){
    this.layoutService.openSidebar=status;
    localStorage.setItem('sidebar',new Boolean(this.layoutService.openSidebar).toString());
  }
  title = 'ngx-tw';
  isOpen: any;
  subOpen: any;
  avatarDropdown=false;
  show1=false;
  show2=false;
  onActivate() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  
  menuSidebar = [
    {
      "heading": '',
      "subpart": [
        {
          "link_name": "Dashboards",
          "link": "null",
          "icon": "fa fa-user",
          "sub_menu": [
            {
              "link_name": "Default",
              "link": "/main-layout/dashboard",
              "submenu2": []
            },
            {
              "link_name": "eCommerce",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Projects",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Online Courses",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Marketing",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Bidding",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "POS System",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Call Center",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Logistics",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Website Analytics",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Finance Performance",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },

          ]
        },
      ]
    },
    // {
    //   "heading": '',
    //   "subpart": [
    //     {
    //       "link_name": "Dashboard",
    //       "link": "/main-layout/layout/dashboard",
    //       "icon": "fa fa-dashboard",
    //       "sub_menu": [],
    //     }
    //   ]
    // },
    // {
    //   "heading": '',
    //   "subpart": [
    //     {
    //       "link_name": "Layout Builder",
    //       "link": "/main-layout/layout/layout-builder",
    //       "icon": "fa fa-table",
    //       "sub_menu": [],
    //     }
    //   ]
    // },
    {
      "heading": 'Pages',
      "subpart": [
        {
          "link_name": "User Profile",
          "link": "null",
          "icon": "fa fa-user",
          "sub_menu": [
            {
              "link_name": "Overview",
              "link": "/main-layout/profile/overview",
              "submenu2": []
            },
            {
              "link_name": "Projects",
              "link": "/main-layout/profile/projects",
              "submenu2": []
            },
            {
              "link_name": "Campaigns",
              "link": "/main-layout/profile/campaigns",
              "submenu2": []
            },
            {
              "link_name": "Documents",
              "link": "/main-layout/profile/documents",
              "submenu2": []
            },
            {
              "link_name": "Followers",
              "link": "/main-layout/profile/followers",
              "submenu2": []
            },
            {
              "link_name": "Activity",
              "link": "/main-layout/profile/activity",
              "submenu2": []
            },
          ]
        },
        {
          "link_name": "Account",
          "link": "null",
          "icon": "fa fa-user",
          "sub_menu": [
            {
              "link_name": "Overview",
              "link": "/main-layout/account/overview",
              "submenu2": []
            },
            {
              "link_name": "Settings",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Security",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Activity",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Billing",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Statements",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Referrals",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "API Keys",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
            {
              "link_name": "Logs",
              "link": "/main-layout/account/settings",
              "submenu2": []
            },
          ]
        },
        {
          "link_name": "Authentication",
          "link": "null",
          "icon": "fa fa-book",
          "sub_menu": [
            {
              "link_name": "Corporate Layout",
              "link": "/profile",
              "submenu2": [
                {
                  "link_name": "Sign-in",
                  "link": "/main-layout/profile/overview",
                },
                {
                  "link_name": "Sign-up",
                  "link": "/main-layout/profile/projects",
                },
                {
                  "link_name": "Two-Factor",
                  "link": "/main-layout/profile/campaigns",
                },
                {
                  "link_name": "Reset Password",
                  "link": "/main-layout/profile/documents",
                },
                {
                  "link_name": "New Password",
                  "link": "/main-layout/profile/connections",
                },
              ]
            },
            {
              "link_name": "Overlay Layout",
              "link": "null",
              "submenu2": [
                {
                  "link_name": "Sign-in",
                  "link": "/main-layout/profile/overview",
                },
                {
                  "link_name": "Sign-up",
                  "link": "/main-layout/profile/projects",
                },
                {
                  "link_name": "Two-Factor",
                  "link": "/main-layout/profile/campaigns",
                },
                {
                  "link_name": "Reset Password",
                  "link": "/main-layout/profile/documents",
                },
                {
                  "link_name": "New Password",
                  "link": "/main-layout/profile/connections",
                },
              ]
            },
            {
              "link_name": "Creative Layout",
              "link": "null",
              "submenu2": [
                {
                  "link_name": "Sign-in",
                  "link": "/main-layout/profile/overview",
                },
                {
                  "link_name": "Sign-up",
                  "link": "/main-layout/profile/projects",
                },
                {
                  "link_name": "Two-Factor",
                  "link": "/main-layout/profile/campaigns",
                },
                {
                  "link_name": "Reset Password",
                  "link": "/main-layout/profile/documents",
                },
                {
                  "link_name": "New Password",
                  "link": "/main-layout/profile/connections",
                },
              ]
            },
            {
              "link_name": "Fancy Layout",
              "link": "null",
              "submenu2": [
                {
                  "link_name": "Sign-in",
                  "link": "/main-layout/profile/overview",
                },
                {
                  "link_name": "Sign-up",
                  "link": "/main-layout/profile/projects",
                },
                {
                  "link_name": "Two-Factor",
                  "link": "/main-layout/profile/campaigns",
                },
                {
                  "link_name": "Reset Password",
                  "link": "/main-layout/profile/documents",
                },
                {
                  "link_name": "New Password",
                  "link": "/main-layout/profile/connections",
                },
              ]
            },
            {
              "link_name": "Email Templates",
              "link": "null",
              "submenu2": [
                {
                  "link_name": "Welcome Message",
                  "link": "/main-layout/profile/overview",
                },
                {
                  "link_name": "Reset Password",
                  "link": "/main-layout/profile/projects",
                },
                {
                  "link_name": "Subscription Confirmed",
                  "link": "/main-layout/profile/campaigns",
                },
                {
                  "link_name": "Credit Card Declined",
                  "link": "/main-layout/profile/documents",
                },
                {
                  "link_name": "Promo 1",
                  "link": "/main-layout/profile/connections",
                },
                {
                  "link_name": "Promo 2",
                  "link": "/main-layout/profile/connections",
                },
                {
                  "link_name": "Promo 3",
                  "link": "/main-layout/profile/connections",
                },
              ]
            },
            {
              "link_name": "Multi-steps Sign-up",
              "link": "null",
              "submenu2": []
            }
          ],
        },
        
      ]
    },
    {
      "heading": 'Apps',
      "subpart": [
        {
          "link_name": "Chat",
          "link": "null",
          "icon": "fa fa-book",
          "sub_menu": [
            {
              "link_name": "Private Chat",
              "link": "/main-layout/chat/private-chat",
              "submenu2": []
            },
            {
              "link_name": "Group Chat",
              "link": "/main-layout/chat/group-chat",
              "submenu2": []
            },
          ],
        },
      ]
    },
  ]


  showSubmenu(itemEl3: HTMLElement) {
    // console.log(itemEl3);
    itemEl3.classList.toggle("showMenu");
  }

  showSubmenu2(itemEl2: HTMLElement) {
    // console.log(itemEl2);
    itemEl2.classList.toggle("showMenu2");
  }
 
}

