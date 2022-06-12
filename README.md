# Commands test example

I tested the application on these commands, maybe they will help you understand how it works. This commands test on Windows 11(x64) in bash.

## start project

     npm run start

> 👋 Welcome to the File Manager, Default!
> 📁 You are currently in C:\Users\Krakozyabchik

     npm run start -- --username=your_username

> 👋 Welcome to the File Manager, your_username!
> 📁 You are currently in C:\Users\Krakozyabchik

## exit

     ctrl + c

> 💪 Thank you for using File Manager, your_username!

     .exit

> 💪 Thank you for using File Manager, your_username!

## up

     up

> 📁 You are currently in C:\Users

     up

> 📁 You are currently in C:\

## ls

    ls

> ['Contacts', 'Desktop', 'Documents', 'Downloads', 'Favorites', 'Links', 'Local
> > Settings', 'Pictures', 'Videos', ...]

## cd

     cd Videos

> 📁 You are currently in C:\Users\Krakozyabchik\Videos

     cd C:\Users\Krakozyabchik

> 📁 You are currently in C:\Users\Krakozyabchik

     cd C:/Users

> 📁 You are currently in C:\Users

     cd ..

> 📁 You are currently in C:\

     cd ogfdhijgfdhsoijgfsdhoijgfdshoi



> ❌ Operation failed

## cat

     cat test 11 s.txt

> kidsfjoisdjfopisdfjss

     cat C:/Users/Krakozyabchik/test 11 s.txt

> kidsfjoisdjfopisdfjss

     cat ewqrwerwer.abc

> ❌ Operation failed

## add

     add test 22 s.txt

> ✅ Created: test 22 s.txt

## rn

     rn C:/Users/Krakozyabchik/test 11 s.txt test.txt

> ✅ Renamed: C:/Users/Krakozyabchik/test 11 s.txt to test.txt

     rn test.txt test 23.txt

> ✅ Renamed: test.txt to test 23.txt

     rn notfile.er terqwr.we

> ❌ Operation failed

## cp

     cp test 23.txt Videos

> ✅ Copied: test 23.txt to Videos

     cp C:\Users\Krakozyabchik\test 23.txt Pictures

> ✅ Copied: test 23.txt to Pictures

     cp C:\Users\Krakozyabchik\test 23.txt C:\Users\Krakozyabchik\Downloads

> ✅ Copied: test 23.txt to C:\Users\Krakozyabchik\Downloads

     cp asdlkpasko.ttx Videos

> ❌ Operation failed

## mv

     mv test 23.txt Videos

> ✅ Copied: test 23.txt to Videos

     mv C:/Users/Krakozyabchik/Videos/test 23.txt C:/Users/Krakozyabchik

> ✅ Movied: test 23.txt to C:/Users/Krakozyabchik

     mv asdlkpasko.ttx Videos

> ❌ Operation failed

## rm

     rm test 23.txt

> ✅ Deleted: test 23.txt

     rm C:/Users/Krakozyabchik/test 23.txt

> ✅ Deleted: C:/Users/Krakozyabchik/test 23.txt

     rm asdlkpasko.ttx

> ❌ Operation failed

## os

     os --EOL

> "\r\n"

     os --cpus

>     Number of CPU: 12
>     Model CPU: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
>     [ { model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
>     speed: '2.592 GHz'   },
>     { model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
>     speed: '2.592 GHz'   },
>     ...]

     os --homedir

>     📁 C:\Users\Krakozyabchik

     os --username

>     Krakozyabchik

     os --architecture

>     x64

## hash

     hash C:\Users\Krakozyabchik\test 23.txt

> e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

     hash test 23.txt

> e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

     hash asdlkpasko.ttx

> ❌ Operation failed

## compress

     compress test 23.txt Videos

> ✅ Done compressing

     compress test 23.txt C:/Users/Krakozyabchik

> ✅ Done compressing

     compress C:/Users/Krakozyabchik/test 23.txt C:/Users/Krakozyabchik/Videos

> ✅ Done compressing

     compress asdlkpasko.ttx Videos

> ❌ Operation failed

## decompress

    decompress test 23.txt.br Videos

> ✅ Done decompressing

    decompress test 23.txt.br C:\Users\Krakozyabchik

> ✅ Done decompressing

    decompress C:\Users\Krakozyabchik\test 23.txt.br C:\Users\Krakozyabchik

> ✅ Done decompressing

    decompress asdlkpasko.ttx Videos

> ❌ Operation failed
