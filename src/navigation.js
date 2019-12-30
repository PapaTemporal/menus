const Navigation = {
  tabs: [
    { name: 'dashboard', label: 'Dashboard', submenu: false },
    { name: 'chaos', label: 'Chaos Monkey', submenu: true },
    { name: 'harmony', label: 'Self Healing', submenu: true },
  ],
  submenus: [
    { name: 'chaos',
      items: [
        { name: 'home', label: 'Home' },
        { name: 'experiments', label: 'Experiments', items: [
          { name: 'create_exp', label: 'Create Experiments' },
          { name: 'view_edit_exp', label: 'View/Edit Experiments' },
          ]
        },
        { name: 'trials', label: 'Trials', items: [
          { name: 'create_trial', label: 'Create Trial' },
          { name: 'view_edit_trial', label: 'View/Edit Trials' },
          ]
        },
        { name: 'schedule', label: 'Schedule', items: [
          { name: 'create_sched', label: 'Create Schedule' },
          { name: 'view_edit_sched', label: 'View/Edit Schedules' },
          ]
        },
      ],
    },
    { name: 'harmony',
      items: [
        { name: 'home', label: 'Home' },
        { name: 'rules', label: 'Rules' },
      ],
    },
  ],
}