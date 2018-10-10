import { fromJS, List, Map, Set } from 'immutable';

// mergeDeep that concats arrays instead or replacing it but wont append if exists
function mergeDeepConcatUniqueArrays (state: any, value: any): any {

    const mergeArrays = (data: Map<string, any>, basePath: string[]) => {

        let next: Map<string, any> = data;

        data.forEach((v, k) => {
            const path = basePath.concat([<string> k]);
            if (List.isList(v)) {
                if (state.hasIn(path)) {
                    const current = state.getIn(path);

                    if (List.isList(current) && !current.isEmpty()) {
                        state = state.setIn(path, List(Set(current).merge(v)));
                        next = next.delete(<string> k);
                    }
                }
            } else if (Map.isMap(v)) {
                next = next.set(<string> k, mergeArrays(v, path));
            }
        });

        return next;
    };

    const updatedData = mergeArrays(fromJS(value), []);

    return state.mergeDeep(updatedData);
}

export default mergeDeepConcatUniqueArrays;