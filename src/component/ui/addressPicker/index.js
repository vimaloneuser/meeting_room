import React from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { widthPercentageToDP } from '../../common/functions';
import Geolocation from '@react-native-community/geolocation';
import { GOOGLE_AUTOCOMPLETE_API_KEY } from '../../common/constant';

Geolocation.getCurrentPosition(
    info => {
        console.log(info);
    },
    error => {
        error,
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
        };
    },
);

const AddressPicker = props => {
    navigator.geolocation = require('@react-native-community/geolocation');
    const getTextStyle = textInputCustom => {
        if (textInputCustom) {
            return {
                fontSize: props.fontSize,
                backgroundColor: 'transparent',
                marginHorizontal: props.marginHorizontal,
                height: props.inputHeight,
                marginBottom: 0,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
            };
        } else {
            return {
                height: 45,
                color: '#000',
                width: 450,
                opacity: 0.8,
                borderColor: 'grey',
                borderRadius: props.textInputRadius,
                borderWidth: 1,
                marginBottom: 0,
                fontSize: props.fontSize,
                borderRadius: 20,
                marginTop: 80,
            };
        }
    };
    const onPressAddress = (data, details) => {
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        props.fetchAddress(lat, lng);
    };
    return ( <
        GooglePlacesAutocomplete keyboardShouldPersistTaps = { 'handled' }
        placeholder = { props.placeholder }
        onPress = { onPressAddress }
        onFail = { error => console.log('error' + error) }
        query = {
            {
                key: 'AIzaSyDjyTvygnEWDcJvXCkJv6DknRMMX6A4h1g',
                language: 'en',
            }
        } {...props }
        getDefaultValue = {
            () => {
                return '';
            }
        }
        currentLocation = { true }
        minLength = { 2 }
        autoFocus = { false }
        returnKeyType = { 'done' }
        keyboardShouldPersistTaps = "handled"
        nearbyPlacesAPI = "GooglePlacesSearch"
        GooglePlacesSearchQuery = {
            {
                rankby: 'distance',
            }
        }
        renderDescription = {
            rowData =>
            rowData.description == undefined ?
            rowData.vicinity : rowData.description
        }
        fetchDetails = { true }
        currentLocationLabel = "Current Location"
        enablePoweredByContainer = { true }
        debounce = { 200 }
        isRowScrollable = { true }
        styles = {
            {
                description: {
                    justifyContent: 'flex-start',
                    textAlign: 'justify',
                },
                textInputContainer: {},
                textInput: getTextStyle(props.textInputCustom),
                container: {
                    marginVertical: 10,
                    width: 250,
                    //maxHeight: widthPercentageToDP(100),
                    alignSelf: 'center',
                },
                row: {
                    backgroundColor: '#f5f5f5',
                    padding: 13,
                    height: 44,
                    flexDirection: 'row',
                },
                separator: {
                    height: 0.5,
                    backgroundColor: '#c8c7cc',
                },
                description: {},
                loader: {
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: 20,
                },
            }
        }
        />
    );
};

export default AddressPicker;