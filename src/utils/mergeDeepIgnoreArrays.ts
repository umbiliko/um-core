import { fromJS, List, Map } from 'immutable';

// mergeDeep that ignores arrays
function mergeDeepIgnoreArrays (state: any, value: any): any {

    const mergeArrays = (data: Map<string, any>, basePath: string[]) => {

        let next: Map<string, any> = data;

        data.forEach((v, k) => {
            const path = basePath.concat([<string> k]);
            if (List.isList(v)) {
                next = next.delete(<string> k);
            } else if (Map.isMap(v)) {
                next = next.set(<string>  k, mergeArrays(v, path));
            }
        });

        return next;
    };

    const updatedData = mergeArrays(fromJS(value), []);

    return state.mergeDeep(updatedData);
}

export default mergeDeepIgnoreArrays;