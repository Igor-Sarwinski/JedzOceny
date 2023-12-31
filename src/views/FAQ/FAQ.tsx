import React, {useState} from 'react';
import { Text, Pressable} from '@gluestack-ui/themed';
import { View, FlatList, Animated } from 'react-native';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
const { colors } = config.tokens;

const faqData = [
    { question: 'Nie możesz się zalogować?', answer: 'Upewnij się że podany przez Ciebie login i hasło są poprawne. Jeśli to nie to było problemem skontaktuj się z administratorem aplikacji. Napisz mail na yngigi@mail.com' },
    { question: 'Jak dodać swoją opinię?', answer: 'Odpowiedź na pytanie 2.' },
    { question: 'Jak dodać restaurację?', answer: 'Odpowiedź na pytanie 3.' },
    { question: 'Nie możesz się zalogować?', answer: 'Odpowiedź na pytanie 4.' },
    { question: 'Jak zmienić zdjęcie profilowe?', answer: 'Odpowiedź na pytanie 5.' },
    { question: 'Jak dodać zdjęcie?', answer: 'Odpowiedź na pytanie 6.' },
    { question: 'Jak napisać komentarz?', answer: 'Odpowiedź na pytanie 7.' },

];

export const FAQ = ({navigation}:any) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // @ts-ignore
    const toggleItem = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    // @ts-ignore
    const renderFAQItem = ({ item, index }) => (

            <Pressable
                onPress={() => toggleItem(index)}
                style={styles.area}
            >
                <Text style={{ color: colors.white, fontSize: 18,fontWeight:'bold' }}>{item.question}</Text>
                {expandedIndex === index && (
                    <Animated.View style={{ marginTop: 10 }}>
                        <Text style={{ color: colors.white }}>{item.answer}</Text>
                    </Animated.View>
                )}
            </Pressable>

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
