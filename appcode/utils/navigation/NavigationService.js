import React from 'react';

export const navigationRef = React.createRef();

export function navigate(routeName, params) {
    let ref = navigationRef.current
    if (ref && routeName) {
        ref.navigate(routeName, params)
    }
}

export function replace(routeName, params) {
    let ref = navigationRef.current
    if (ref && routeName) {
        ref.replace(routeName, params)
    }
}

export function goBack() {
    let ref = navigationRef.current
    if (ref) {
        ref.goBack()
    }
}