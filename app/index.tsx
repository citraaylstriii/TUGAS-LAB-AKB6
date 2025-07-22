import React, { ComponentProps } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

type IconInfo = {
  name: string;
  library: keyof typeof ICON_LIBRARIES;
  color: string;
};

type IconCardProps = {
  icon: IconInfo;
};

const ICON_LIBRARIES = {
  FontAwesome: (props: ComponentProps<typeof FontAwesome>) => <FontAwesome {...props} />,
  Ionicons: (props: ComponentProps<typeof Ionicons>) => <Ionicons {...props} />,
  MaterialCommunityIcons: (props: ComponentProps<typeof MaterialCommunityIcons>) => <MaterialCommunityIcons {...props} />,
  Feather: (props: ComponentProps<typeof Feather>) => <Feather {...props} />,
  AntDesign: (props: ComponentProps<typeof AntDesign>) => <AntDesign {...props} />,
};

const ICON_LIST: IconInfo[] = [
  { name: 'rocket', library: 'FontAwesome', color: '#ff4757' },
  { name: 'planet', library: 'Ionicons', color: '#ffa502' },
  { name: 'space-station', library: 'MaterialCommunityIcons', color: '#747d8c' },
  { name: 'git-branch', library: 'Feather', color: '#2ed573' },
  { name: 'codesquare', library: 'AntDesign', color: '#1e90ff' },
  { name: 'heart', library: 'FontAwesome', color: '#ff6b81' },
  { name: 'game-controller', library: 'Ionicons', color: '#5352ed' },
  { name: 'coffee', library: 'Feather', color: '#834d18' },
  { name: 'android', library: 'MaterialCommunityIcons', color: '#a0d243' },
  { name: 'apple1', library: 'AntDesign', color: '#ced6e0' },
];

const IconCard = ({ icon }: IconCardProps) => {
  const IconComponent = ICON_LIBRARIES[icon.library];

  return (
    <View style={styles.cardContainer}>
      {/* The 'name' property is cast as 'any' because each icon library has its own specific icon name list.
          Creating a strict type for all of them would be too complex.
          This cast is a practical solution telling TypeScript to trust the given name. */}
      <IconComponent name={icon.name as any} size={48} color={icon.color} />
      <Text style={styles.iconNameText}>{icon.name}</Text>
      <Text style={styles.iconLibraryText}>{icon.library}</Text>
    </View>
  );
};

export default function IconGalleryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Icon Gallery</Text>
          <Text style={styles.subtitleText}>Displaying 10 Different Icons</Text>
        </View>
        <View style={styles.gridContainer}>
          {ICON_LIST.map((icon, index) => (
            <IconCard key={index} icon={icon} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  titleContainer: {
    padding: 24,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitleText: {
    fontSize: 16,
    color: '#A9A9A9',
    marginTop: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  cardContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '42%', // About 2 columns with some spacing
    aspectRatio: 1, // Makes the card square
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
  iconNameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EAEAEA',
    marginTop: 12,
  },
  iconLibraryText: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
});
