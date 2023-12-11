import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import { View, TouchableOpacity, FlatList, Animated } from 'react-native';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
import { Q } from '@expo/html-elements';
const { colors } = config.tokens;

const faqData = [
    { question: 'Nie możesz się zalogować?', answer: 'Upewnij się że podany przez Ciebie login i hasło są poprawne. Jeśli to nie to było problemem skontaktuj się z administratorem aplikacji. Napisz mail na yngigi@mail.com' },
    { question: 'Jak dodać swoją opinię?', answer: 'Odpowiedź na pytanie 2.' },
    { question: 'Jak dodać restaurację?', answer: 'Odpowiedź na pytanie 3.' },
    { question: 'Nie możesz się zalogować?', answer: 'Odpowiedź na pytanie 3.' },
    { question: 'Jak zmienić zdjęcie profilowe?', answer: 'Odpowiedź na pytanie 3.' },
    { question: 'Jak dodać zdjęcie?', answer: 'Odpowiedź na pytanie 3.' },
    { question: 'Jak napisać komentarz?', answer: 'Odpowiedź na pytanie 3.' },

];

export const FAQ = ({navigation}:any) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // @ts-ignore
    const toggleItem = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    // @ts-ignore
    const renderFAQItem = ({ item, index }) => (
        <View style={{ marginBottom: 10 }}>
            <TouchableOpacity
                onPress={() => toggleItem(index)}
                style={{
                    backgroundColor: colors.input,
                    borderWidth: 2,
                    borderColor: colors.border,
                    borderRadius: 5,
                    padding: 15,
                }}
            >
                <Text style={{ color: colors.white, fontSize: 18 }}>{item.question}</Text>
                {expandedIndex === index && (
                    <Animated.View style={{ marginTop: 10 }}>
                        <Text style={{ color: colors.white }}>{item.answer}</Text>
                    </Animated.View>
                )}
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>

            <FlatList
                data={faqData}
                renderItem={renderFAQItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default FAQ;