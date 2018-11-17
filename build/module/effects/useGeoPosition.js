import { useEffect, useState } from 'react';
import { createResource } from './createResource';
const PositionResource = createResource(load, (positionOptions) => 'geoposition');
function load(positionOptions) {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => {
        resolve(position);
    }, error => {
        reject(error);
    }, positionOptions));
}
export const useGeoPosition = (positionOptions) => {
    const initialCoords = PositionResource.read();
    const [position, setPosition] = useState(initialCoords);
    useEffect(() => {
        const listener = navigator.geolocation.watchPosition(positionUpdate => {
            setPosition(positionUpdate);
        }, () => null, positionOptions);
        return () => navigator.geolocation.clearWatch(listener);
    }, []);
    return position;
};
//# sourceMappingURL=useGeoPosition.js.map