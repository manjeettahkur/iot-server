export default {
    env: 'development',
    nodePort: 9000,
    mongoUrl: 'mongodb://localhost:27017/IoT',
    redisUrl: 'redis://localhost:6379',
    defaultCacheInSeconds: 10,
    statsCacheInSeconds: 5,
    maxDefaultNearbyDistanceInMeters: 10000,
    basicAuthUsers: {
        admin: 'admin'
    },
    jwtSecret: '2SrZAfNgGhn7eff2P5hvPUdX',
    googleMapsKey: 'AIzaSyCtlsvLkEPTwMmSPXm1EsBXcdJ94kZNJC4',
    debug: true
};