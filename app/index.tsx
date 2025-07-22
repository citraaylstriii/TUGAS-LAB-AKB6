import React, { ComponentProps } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

type InfoIkon = {
  nama: string;
  pustaka: keyof typeof PUSTAKA_IKON;
  warna: string;
};

type PropertiKartuIkon = {
  ikon: InfoIkon;
};

const PUSTAKA_IKON = {
  FontAwesome: (props: ComponentProps<typeof FontAwesome>) => <FontAwesome {...props} />,
  Ionicons: (props: ComponentProps<typeof Ionicons>) => <Ionicons {...props} />,
  MaterialCommunityIcons: (props: ComponentProps<typeof MaterialCommunityIcons>) => <MaterialCommunityIcons {...props} />,
  Feather: (props: ComponentProps<typeof Feather>) => <Feather {...props} />,
  AntDesign: (props: ComponentProps<typeof AntDesign>) => <AntDesign {...props} />,
};

const DAFTAR_IKON: InfoIkon[] = [
  { nama: 'rocket', pustaka: 'FontAwesome', warna: '#ff4757' },
  { nama: 'planet', pustaka: 'Ionicons', warna: '#ffa502' },
  { nama: 'space-station', pustaka: 'MaterialCommunityIcons', warna: '#747d8c' },
  { nama: 'git-branch', pustaka: 'Feather', warna: '#2ed573' },
  { nama: 'codesquare', pustaka: 'AntDesign', warna: '#1e90ff' },
  { nama: 'heart', pustaka: 'FontAwesome', warna: '#ff6b81' },
  { nama: 'game-controller', pustaka: 'Ionicons', warna: '#5352ed' },
  { nama: 'coffee', pustaka: 'Feather', warna: '#834d18' },
  { nama: 'android', pustaka: 'MaterialCommunityIcons', warna: '#a0d243' },
  { nama: 'apple1', pustaka: 'AntDesign', warna: '#ced6e0' },
];

const KartuIkon = ({ ikon }: PropertiKartuIkon) => {
  const KomponenIkon = PUSTAKA_IKON[ikon.pustaka];

  return (
    <View style={gaya.kartu}>
      {/* Properti 'name' diberi cast 'as any' karena setiap pustaka ikon memiliki daftar nama unik.
          Membuat tipe yang ketat untuk semuanya terlalu rumit.
          Cast ini adalah solusi praktis untuk memberitahu TypeScript bahwa nama yang diberikan valid. */}
      <KomponenIkon name={ikon.nama as any} size={48} color={ikon.warna} />
      <Text style={gaya.teksNamaIkon}>{ikon.nama}</Text>
      <Text style={gaya.teksPustakaIkon}>{ikon.pustaka}</Text>
    </View>
  );
};

export default function LayarGaleriIkon() {
  return (
    <SafeAreaView style={gaya.areaAman}>
      <ScrollView>
        <View style={gaya.wadahJudul}>
          <Text style={gaya.teksJudul}>Galeri Ikon</Text>
          <Text style={gaya.teksSubJudul}>Menampilkan 10 Ikon Berbeda</Text>
        </View>
        <View style={gaya.kisi}>
          {DAFTAR_IKON.map((ikon, indeks) => (
            <KartuIkon key={indeks} ikon={ikon} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  areaAman: {
    flex: 1,
    backgroundColor: '#121212', // Latar belakang gelap
  },
  wadahJudul: {
    padding: 24,
    alignItems: 'center',
  },
  teksJudul: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  teksSubJudul: {
    fontSize: 16,
    color: '#A9A9A9',
    marginTop: 4,
  },
  kisi: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  kartu: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '42%', // Sekitar 2 kolom dengan jarak antar kartu
    aspectRatio: 1, // Membuat bentuk kartu menjadi persegi
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
  teksNamaIkon: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EAEAEA',
    marginTop: 12,
  },
  teksPustakaIkon: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
});
