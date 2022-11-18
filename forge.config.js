module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  publishers: [
        {
          name: '@electron-forge/publisher-github',
          config: {
            repository: {
              owner: 'SuperCater',
              name: 'Simple-Calculator'
            },
            prerelease: true,
            draft: true,
          }
        }
      ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
