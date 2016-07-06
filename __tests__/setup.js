import mockery from 'mockery'

// inject __DEV__
global.__DEV__ = true

// We enable mockery and leave it on.
mockery.enable()

// Silence mockery's warnings as we'll opt-in to mocks instead
mockery.warnOnUnregistered(false)

// Let's register some mocks for the images that
// are brought into our project. You'll have to do
// this because the React Native packager and babel
// are locked into a horrible custody battle.
mockery.registerMock('../Images/ir.png', 0)
mockery.registerMock('../Images/top_logo.png', 0)
mockery.registerMock('../Images/ignite_logo.png', 0)
mockery.registerMock('../Images/tile_bg.png', 0)
mockery.registerMock('../Images/BG.png', 0)
