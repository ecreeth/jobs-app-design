/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import BookmarkIcon from '../components/icons/Bookmark';

import api from '../fake_api';
import {flex, text} from '../styles';

function Job({item}) {
  return (
    <View
      style={[
        {
          elevation: 1,
          paddingLeft: 15,
          borderRadius: 4,
          paddingRight: 10,
          marginBottom: 12,
          paddingVertical: 10,
          marginHorizontal: 10,
          shadowColor: '#0f1228',
          backgroundColor: '#fff',
        },
      ]}>
      <View style={[flex.row, flex.justifyBetween]}>
        <Text
          style={[
            text.p,
            {
              width: '90%',
              color: '#333',
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
            },
          ]}>
          {item.Title}
        </Text>
        <BookmarkIcon width="25" height="25" stroke="#ccc" />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#666'}}>Hace 5 minutos </Text>
        {item.JobType !== 'N/A' ? (
          <Text style={{color: '#333'}}>&middot; {item.JobType}</Text>
        ) : null}
      </View>

      <View
        style={{
          marginTop: 4,
          paddingTop: 4,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>{item.CompanyName}</Text>
          {item.Location !== 'N/A' ? (
            <Text>
              {item.Location.length > 27
                ? item.Location.slice(0, 27) + '...'
                : item.Location}
            </Text>
          ) : null}
        </View>

        {item.IsRemote ? (
          <View
            style={{
              borderRadius: 4,
              paddingVertical: 4,
              paddingHorizontal: 15,
              backgroundColor: '#f5fff1',
            }}>
            <Text style={{color: '#51c7a7'}}>Remoto</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

function JobScreen() {
  return (
    <FlatList
      data={api.Jobs}
      renderItem={Job}
      keyExtractor={item => item.Link}
      contentContainerStyle={{backgroundColor: '#f8f2ee'}}
    />
  );
}

export default JobScreen;
