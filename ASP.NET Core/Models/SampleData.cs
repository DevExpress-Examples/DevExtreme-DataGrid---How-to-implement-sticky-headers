using System;
using System.Collections.Generic;


namespace ASP_NET_Core.Models {
    static class SampleData {
        static long s = 123456789;

        static long RandomN()
        {
            s = (1103515245 * s + 12345) % 2147483647;
            return s % (10 - 1);
        }

        static long PosRandom()
        {
            s = (1103515245 * s + 12345) % 2147483647;
            return s % (4 - 1);
        }

        static long RandomName()
        {
            s = (2103515245 * s + 12345) % 2147483647;
            return s % (10 - 1);
        }
        public static List<SampleOrder> GenerateData(int count)
        {
            List<SampleOrder> items = new List<SampleOrder>();
            string[] surnames = { "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Harris", "Clark", "Allen", "Scott", "Carter" };
            string[] names = { "James", "John", "Robert", "Christopher", "George", "Mary", "Nancy", "Sandra", "Michelle", "Betty" };
            string[] gender = { "Male", "Female" };
            string[] positions = { "Trainee", "Junior", "Middle", "Senior" };

            long startBirthDate = DateTime.Parse("1/1/1975").Ticks;
            long endBirthDate = DateTime.Parse("1/1/1992").Ticks;

            long empStartDate = DateTime.Parse("1/1/2018").Ticks;
            long empEndDate = DateTime.Now.Ticks;

            for (int i = 0; i < count; i++)
            {
                long birthDateTicks = startBirthDate + (long)((RandomN() * (endBirthDate - startBirthDate)) / 10);
                DateTime birthDate = new DateTime(birthDateTicks).AddHours(12);

                long empDateTicks = empStartDate + (long)((RandomN() * (empEndDate - empStartDate)) / 10);
                DateTime employmentDate = new DateTime(empDateTicks).AddHours(12);

                long nameIndex = RandomN();
                long supIndex = RandomName();

                SampleOrder item = new SampleOrder
                {
                    ID = i + 1,
                    FirstName = names[nameIndex],
                    LastName = surnames[RandomN()],
                    Supervisor = names[supIndex],
                    Position = positions[PosRandom()],
                    Gender = gender[nameIndex / 5],
                    BirthDate = birthDate,
                    StartedDate = employmentDate
                };

                items.Add(item);
            }

            return items;
        }

        public static List<SampleOrder> Orders = new List<SampleOrder>();
    }
}
