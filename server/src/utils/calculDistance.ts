function calculateDistance(position1: { lat: number; lng: number }, position2: { lat: number; lng: number }) {
    const mForOneKm = 1000;
    const R = 6371e3; // Earth radius in meters
    const φ1 = position1.lat * Math.PI / 180;
    const φ2 = position2.lat * Math.PI / 180;
    const Δλ = (position2.lng - position1.lng) * Math.PI / 180;

    const Δφ = Math.abs(φ2 - φ1);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (R * c) / mForOneKm;
}

export default calculateDistance;