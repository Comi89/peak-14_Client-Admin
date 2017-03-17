import { Injectable } from '@angular/core';

@Injectable()
export class MenuItemsService {

  constructor() { }

//   interface IMyEntity {
//     id: number;
//     name: string;
//     key: string;
// }
//
// var contentOrderBy = [
//     { id: 0, name: 'CId', key: 'contentId' },
//     { id: 1, name: 'Modified By', key: 'modifiedBy' },
//     { id: 2, name: 'Modified Date', key: 'modified' },
//     { id: 3, name: 'Status', key: 'contentStatusId' },
// ];
//
// var myContent : IMyEntity[] = contentOrderBy;
//
  private menuItems = [
    {
      title: "Users & groups",
      icon: "fa fa-user",
      menuItems: [
        {
          text: "Users",
          highlighted: true,
          header: {
            searchSelectBox : true,
            clientSelectBox : true,
            searchInput : true
          }
        },
        {
          text: "Groups",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : true,
            searchInput : true
          }
        },
        {
          text: "Clients",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        }]
    },
    {
      title: "Settings",
      icon: "fa fa-cog",
      menuItems: [
        {
          text: "Views & Permisions",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Filters",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "User Interface",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "SMTP Settings",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Email Templates",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        }]
    },
    {
      title: "Scripting Engine",
      icon: "fa fa-microchip",
      menuItems: [
        {
          text: "Action scripts",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Actions",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Analyses",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Force analyze Assets",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Consistensy-check",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        }]
    },
    {
      title: "Database-Setup",
      icon: "fa fa-database",
      menuItems: [
        {
          text: "Fileserver",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Paths",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "MediaShares",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Categories",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Smart Categories",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Own Metadata",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Languages",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Default-Icons",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Metadata-Icons",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "News",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        }]
    },
    {
      title: "Licence and Monitoring",
      icon: "fa fa-desktop",
      menuItems: [
        {
          text: "Active Sessions",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Licence",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Statistics",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Recent Changes",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        },
        {
          text: "Admin Log",
          highlighted: false,
          header: {
            searchSelectBox : false,
            clientSelectBox : false,
            searchInput : false
          }
        }]
    }
  ];


  getMenuItems(){
    return this.menuItems;
  }
  setMenuItems(menuItems){
    this.menuItems = menuItems;
  }
  activeTab;
  getActiveMenuItem(){
    this.menuItems.filter((item) => {
      item.menuItems.map((menu) => {
        if(menu.highlighted == true){
          this.activeTab = menu;
        }
      });
    });
    return this.activeTab;
  }

}
