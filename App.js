import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions, Scene, Drawer, Router } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import CurrencyRate from './src/components/currency';
import Weather from './src/components/weather';
import PlacesOfInterest from './src/components/placesOfInterest';
import Trip from './src/components/trip';

import InFlightDelivery from './src/components/InFlight';
import Voice from './src/components/voice';

import configureStore from './src/utils/store';
let { store, persistor } = configureStore();
const ConnectedRouter = connect()(Router);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouter>
						<Scene key="root">
							{/* <Scene
								key="trip"
								hideNavBar
								component={Trip}
								initial
							/>
							<Scene
								key="currency"
								hideNavBar
								component={CurrencyRate}
							/>
							<Scene
								key="weather"
								hideNavBar
								component={Weather}
							/>
							<Scene
								key="placesOfInterest"
								hideNavBar
								component={PlacesOfInterest}
							/> */}
							<Scene
								key="inFlightDelivery"
								hideNavBar
								component={InFlightDelivery}
							/>
						</Scene>
					</ConnectedRouter>
				</PersistGate>
			</Provider>
		);
	}
}
