import { caesarCypher } from './caesarCypher';

describe('caesarCypher', () => {
    it.each`
        string | factor | expected
        ${'abc'} | ${0} | ${'abc'}
        ${'abcdefghijklmnopqrstuvwxyz'} | ${3} | ${'defghijklmnopqrstuvwxyzabc'}
        ${'middle-Outz'} | ${2} | ${'okffng-Qwvb'}
        ${`mid'dle-Outz`} | ${2} | ${`okf'fng-Qwvb`}
        ${'a-=-='} | ${10} | ${'k-=-='}
        ${'z'} | ${26} | ${'z'}
        ${'z'} | ${27} | ${'a'}
        ${'hfjewshdkfjashfkjabz`,vadk`v scxad'} | ${4} | ${'ljniawlhojnewljonefd`,zeho`z wgbeh'}
        ${'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.'} | ${7} | ${'Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.'}
        ${'1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M'} | ${27} | ${'1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N'}
        `('converts with caesar cypher with $factor', ({ string, factor, expected}) => {
        expect(caesarCypher(string, factor)).toBe(expected);
    })
});