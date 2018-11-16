import { fromJS, List, Map } from 'immutable';

// mergeDeep that replaces arrays
function mergeDeepReplaceArrays (state: any, value: any): any {

    const mergeArrays = (data: Map<string, any>, basePath: string[]) => {

        let next: Map<string, any> = data;

        data.forEach((v, k) => {
            const path = basePath.concat([<string> k]);
            if (List.isList(v)) {
                state = state.setIn(path, v);
                next = next.deleteIn(path);
            } else if (Map.isMap(v)) {
                next = next.setIn(path, mergeArrays(v, path));
            }
        });

        return next;
    };

    const updatedData = mergeArrays(fromJS(value), []);

    return state.mergeDeep(updatedData);
}

export default mergeDeepReplaceArrays;